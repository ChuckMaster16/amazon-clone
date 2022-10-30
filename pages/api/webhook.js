import {buffer} from 'micro';
import * as admin from 'firebase-admin';

//secure a firebase connection from the backend
const serviceAcount = require('../../../permissions.json');
const app = !admin.apps.length
? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
: admin:app();


//establish connection with stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

//fuction to fullfill the order and view what was ordered
const needsFullfillment = async (session) => {
  console.log("fullfill orders", session);
  return app
  .firestore()
  .collection('users')
  .doc(session.metadata.email)
  .collection('orders').doc(session.id).set({
    amount:session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: JSON.parse(session.metadata.images),
    timestamp:admin.firestore.FieldValue.serverTimestamp()
  })
  .then(()=> {
    console.log(`SUCCESS: Order ${session.id} has been added to the DataBase`);
  });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    //verify that the event posted came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    }catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`webhook error: ${err.message}`)
    }

    //Handle the checkout session completed event
    if (event.type === "checkout.session.completed"){
      const session = event.data.object;

      //Fullfill the order here
      return needsFullfillment(session)
      .then(()=>res.status(200))
      .catch((err) =>res.status(400).send(`Webhook Error: ${err.message}`));

    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}
