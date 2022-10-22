import React from 'react'
import Header from "../components/Header"
import Image from "next/image"
import {signIn, signOut, useSession} from "next-auth/react"
import {useSelector} from 'react-redux';
import {selectItems, selectTotal} from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';

function Checkout() {
  const {data: session, status } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100 ">
    <Header/>
    <main className="lg:max-w-screen-2xl mx-auto">
    {session ? (<div className="flex-grow m-5 shadow-md rounded-md"><Image src="https://res.cloudinary.com/chuckmaster/image/upload/v1666459736/amazon%20clone%20files/primeimage_twag4s.png"
    width={1020} height={250} objectFit="contain"/>
    </div>
      ) : (
    <div className="w-[1020px] bg-white h-[250px] grid grid-row-2 grid-flow-col gap-0  relative  shadow-md rounded-md">
    <div className="aboslute  mt-[62px] flex ">
     <Image src="https://res.cloudinary.com/chuckmaster/image/upload/v1666413465/amazon%20clone%20files/checkout_page_ocjh1m.png"
        width={760}
        height={130}
        objectFit="contain"
        />
        <div className="w-[500px]">
          <h1 className="text-xl font-bold ">You are not Logged in</h1>
          <p className="text-sm">Shop the deals of the day</p>
          <div className="flex pt-7">
          <button onClick={signIn} className=" text-sm text-black bg-yellow-400 h-15 hover:bg-yellow-100 hover:font-semibold break-normal px-5 mr-2 rounded-md shadow-md">  Sign in to your account </button>
           <button className=" text-sm  text-black bg-white-400 border p-2 px-6 mr-2 rounded-md shadow-md hover:bg-black hover:text-white hover:font-semibold"> subscribe now</button>
          </div>
          </div>
        </div>
      </div>)}
      <div>
      <div className="flex flex-col  p-5 space-y-10 bg-white ">
      <h1 className="text-3xl border-b pb-4">{items.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}</h1>

      {items.map((item, i)=>(
        <CheckoutProduct
        key={i}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        hasPrime={item.hasPrime}
        rating={item.rating}
        />
      ))}
      </div>
      </div>

      <div className="flex flex-col bg-white p-10 shadow-md mt-5 rounded-md">
        {items.length > 0 && (
          <>
          <h2 className="whitespace-nowrap">
          Subtotal ({items.length} items): <span className="font-bold ml-4">
          <Currency className="" quantity={total} currency="USD"/>
          </span>
          </h2>

          <button
          disabled={!session}
          className={`btn mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-100 cursor-not-allowed"}`}>
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
          </>

        )}
      </div>
    </main>

    </div>
  )
}

export default Checkout
