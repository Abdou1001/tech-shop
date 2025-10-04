import React, { useContext } from 'react'
import Heading from '../shared/Heading'
import Forms from './Forms'
import Popup from '../shared/Popup'
import { varContext } from '../../App'

const Contact = () => {
    // popup when click on buttons to login in the website
    const { setShowPopup, showPopup } = useContext(varContext);


    const handlePopup = () => {
        setShowPopup(s => !s)
    }

    return (


        <div className='container py-20'>
            {showPopup && <Popup />}
            <Heading title={"Contact Us"} subtitle={"Let's make your brand brilliant!"} />
            <Forms />
        </div>
    )
}

export default Contact
