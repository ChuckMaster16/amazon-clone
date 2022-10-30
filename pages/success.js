import React from 'react'
import Header from '../components/Header'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useRouter} from 'next/router'

function Success() {
  const router= useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header/>
      <main className="max-w-screen-lg mx-auto  ">
        <div className="flex flex-col p-10 bg-white rounded-xl shadow-xl">
          <div className="flex items-center space-x-2 mb-5">
            <CheckBoxIcon className="text-green-500"/>
            <h1 className="text-3xl"> Thank you your order has been Confirmed!</h1>
          </div>
            <p>
              Thank you for Shopping with us. We'll send you a confirmation order number and
              tracking details once your order has been shipped. If you would like to Check
              the status of Orders(s) Please press the link Bellow.
            </p>
            <button className="btn mt-8" onClick={()=> router.push("/orders")}>Go to my Orders</button>
        </div>
      </main>
    </div>
  )
}

export default Success
