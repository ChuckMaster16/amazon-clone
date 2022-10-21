import React, {useState} from 'react'
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING=1;

function Product({id, title, price, description, category, image}) {
  //ramdomizing the rating
  const [rating] = useState(
    Math.floor(Math.random()* (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
const [hasPrime]=useState(Math.random() < 0.5)

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
    <p className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">{category}</p>
    <Image src={image} width={200} height={200} objectFit="contain"/>
    <h4>{title}</h4>
    <div className="flex">
    {Array(rating).fill().map((_, i)=>(
      <StarIcon className="text-yellow-500" />
    ))}
    </div>
    <p className="text-xs my-2 line-clamp-2">{description}</p>
    <div>
    <Currency className="mb-5" quantity={price} currency="USD"/>
    </div >
    {hasPrime && (<div className="flex items-center space-x-2 my-2">
      <img className="h-10"src="https://res.cloudinary.com/chuckmaster/image/upload/v1666328200/amazon%20clone%20files/prime_tnlotx.png" alt="prime"/>
      <p className="text-xs text-gray-500">FREE Next-day Delievery</p>
      </div>)}
      <button className="mt-auto btn">Add to Basket</button>
    </div>
  )
}

export default Product
