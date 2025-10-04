import React, { useContext, useState } from 'react'
import Hero from './hero/Hero'
import Category from './category/Category'
import Services from './services/Services'
import headphone from "../../assets/hero-img/headphone.png"
import smart from "../../assets/hero-img/smartwatch2-removebg.png"
import Banner from '../banner/Banner'
import Products from './products/Products'
import Blogs from './blogs/Blogs'
import Partners from './partners/Partners'
import Footer from '../footer/Footer'
import Popup from '../shared/Popup'
import { varContext } from '../../App'


const Home = () => {

  // For Banner component
  const BannerData = {
        discount: "30% OFF",
        title: "Fine Smile",
        date: "10 Jan to 28 Jan",
        image: headphone,
        title2: "Air Solo Bass",
        title3: "Winter Sale",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaqua reiciendis",
        bgColor: "bg-primary"
    };

  // For Banner component
  const BannerData2 = {
        discount: "30% OFF",
        title: "Happy Hours",
        date: "14 Jan to 28 Jan",
        image: smart,
        title2: "Smart Solo",
        title3: "Winter Sale",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaqua reiciendis",
        bgColor: "bg-brandGreen"
    };

  const { showPopup } = useContext(varContext);



  return (
    <div className='bg-white dark:bg-gray-900 duration-200'>
      {showPopup && <Popup /> }
        <Hero />
        <Category />
        <Services />
        <Banner data={BannerData} />
        <Products />
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
    </div>
  )
}

export default Home
