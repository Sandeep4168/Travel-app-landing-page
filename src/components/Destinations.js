import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <h1> All-Inclusive Resorts</h1>
        <p className="py-4"> On the most exotic locations</p>
        
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={pic1} alt="/"/>
            <img className='w-full h-full object-cover' src={pic2} alt="/"/>
            <img className='w-full h-full object-cover' src={pic3} alt="/"/>
            <img className='w-full h-full object-cover' src={pic4} alt="/"/>
            <img className='w-full h-full object-cover' src={pic5} alt="/"/>


        </div>

        
    </div>
  )
}

export default Destinations