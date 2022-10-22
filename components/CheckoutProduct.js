import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter';
import {useDispatch} from 'react-redux'
import {addToBasket, removeFromBasket} from '../slices/basketSlice';

function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {
  const dispatch = useDispatch();
  const addmoreToBasket = () => {
    const product ={id, title, price, rating,  description, category, image, hasPrime};
    //sending the product as an action to the redux store... the basket slice
    dispatch(addToBasket(product));
  };
  const removeAnItem =()=> {
      //remove and item from the redux store
    dispatch(removeFromBasket({id}));
  };

  return (
    <div className="grid grid-cols-5">
    <Image src={image} width={200} height={200} objectFit="contain"/>
    <div className="col-span-3 mx-5">
      <p>{title}</p>
      <div className="flex">
      {Array(rating).fill().map((_, i)=>(
        <StarIcon key={rating} className="text-yellow-500" />
      ))}
      </div>
      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <Currency quantity={price} currency="USD"/>
      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img className="h-10" laoding="lazy" src="https://res.cloudinary.com/chuckmaster/image/upload/v1666328200/amazon%20clone%20files/prime_tnlotx.png" alt="prime"/>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
    </div>
    <div className="flex flex-col space-y-2 my-auto justify-self-end ">
      <button onClick={addmoreToBasket} className="btn mt-auto shadow-md"> Add to Basket </button>
      <button onClick={removeAnItem} className="btn mt-auto shadow-md"> Remove from basket </button>
    </div>

    </div>
  )
}

export default CheckoutProduct
