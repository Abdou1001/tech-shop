import React, { useContext } from 'react'
import Heading from '../shared/Heading'
import Footer from '../footer/Footer'
import Items from './Items'
import Popup from '../shared/Popup'
import { varContext } from '../../App'

const Cart = () => {
  
  // popup when click on buttons to login in the website
  const { showPopup } = useContext(varContext);
  
  return (
    <div className='pt-20'>
      {showPopup && <Popup />}
      <Heading title={"Your Cart"} subtitle={"Secure payment feature"} />
      <Items />
    </div>
  )
}

export default Cart
