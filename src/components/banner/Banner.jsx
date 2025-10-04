import React, { useContext } from 'react'
import Button from '../shared/Button'
import { replace } from 'react-router-dom'
import { varContext } from '../../App';



const Banner = ({ data }) => {

  // popup when click on buttons to login in the website
  const { setShowPopup } = useContext(varContext);


  const handlePopup = () => {
    setShowPopup(s => !s)
  }


  return (
    <div className='container py-20 text-white'>
      <div className={`${data.bgColor} min-h-[300px] rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-5 items-center p-8`}>
        {/* first col */}
        <div>
          <span className='text-sm'>{data.discount}</span>
          <h2 className='text-5xl sm:text-7xl font-bold uppercase'>{data.title}</h2>
          <span className='text-sm'>{data.date}</span>
        </div>
        <div>
          <img src={data.image} alt={data.title} className='drop-shadow-[-4px_4px_10px_rgba(0,0,0,.6)] lg:scale-125 relative lg:bottom-5 lg:right-5 w-[350px] lg:w-[100%] mx-auto' data-aos="fade-up" data-aos-offset="200" />
        </div>
        <div>
          <h2 className='font-bold text-xl mb-5'>{data.title2}</h2>
          <h3 className='text-2xl sm:text-5xl font-bold my-3'>{data.title3}</h3>
          <p className='my-3 text-sm max-w-[300px]'>{data.paragraph}</p>
          {/* button */}
          <div onClick={handlePopup}>
            <Button text={"Shop Now"} bgColor={"bg-white"} textColor={data.bgColor.replace("bg", "text")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
