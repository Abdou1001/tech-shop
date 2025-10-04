import React from 'react'
import Img1 from "../../../assets/brands-img/br-1.png"
import Img2 from "../../../assets/brands-img/br-2.png"
import Img3 from "../../../assets/brands-img/br-3.png"
import Img4 from "../../../assets/brands-img/br-4.png"
import Img5 from "../../../assets/brands-img/br-5.png"

const Partners = () => {
  return (
    <div className='continer pt-10'>
      <div className="brands bg-gray-300/50 dark:bg-gray-800/50 py-7 whitespace-nowrap overflow-hidden">
            <div className="brands-slide animate-[slide_20s_linear_infinite] inline-block">
                <img src={Img1} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img2} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img3} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img4} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img5} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
            </div>
            <div className="brands-slide  animate-[slide_20s_linear_infinite] inline-block">
                <img src={Img1} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img2} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img3} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img4} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
                <img src={Img5} alt="logo" className='w-[80px] dark:invert inline-block mx-10 lg:mx-20'/>
            </div>
        </div>
    </div>
  )
}

export default Partners
