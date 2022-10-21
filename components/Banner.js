import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className="relative">
    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}>
           <div>
               <img
               src="https://res.cloudinary.com/chuckmaster/image/upload/v1664026528/amazon%20clone%20files/amazon_ads3_h2of4t.jpg"
               loading="lazy" alt="" />
           </div>
           <div>
               <img src="https://res.cloudinary.com/chuckmaster/image/upload/v1664026528/amazon%20clone%20files/amazon_ads4_m3nx3i.jpg" loading="lazy" />
           </div>
           <div>
               <img src="https://res.cloudinary.com/chuckmaster/image/upload/v1664026528/amazon%20clone%20files/amazon_ads5_actte8.jpg" loading="lazy"/>
           </div>
           <div>
               <img src="https://res.cloudinary.com/chuckmaster/image/upload/v1664026528/amazon%20clone%20files/amazon_ads6_axssq1.jpg" loading="lazy"/>
           </div>
           <div>
               <img src="https://res.cloudinary.com/chuckmaster/image/upload/v1663919055/amazon%20clone%20files/amazon_ads_gokxcq.jpg" loading="lazy"/>
           </div>
       </Carousel>



    </div>
  )
}

export default Banner
