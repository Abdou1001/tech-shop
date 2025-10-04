import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  // MenuLink
  const menuLinks = [
    {
      id: 1, name: "Home", path: "/"
    },
    {
      id: 2, name: "Shop", path: "/shop"
    },
    {
      id: 3, name: "About", path: "/about"
    },
    {
      id: 4, name: "Contact", path: "/contact"
    }
  ];

  // Dropdown links
  const quickLinks = [
    {
      id: 5, name: "Trending Products", path: "/shop"
    },
    {
      id: 6, name: "Best Selling", path: "/shop"
    },
    {
      id: 7, name: "Top Rated", path: "/shop"
    },
  ];


  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-y-20 gap-5">
          <div>
            {/* logo */}
            <Link to='/' >
              <h2 className='text-primary tracking-wider font-bold text-2xl sm:text-3xl mb-4'>
                TECH SHOP
              </h2>
            </Link>
            {/* text */}
            <p className='text-gray-500 max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
            <span className='my-4 inline-block text-gray-500 font-bold'>Made with 💖 by The Dhoom</span>
            <Link to={"https://abdou1001.github.io/portfolio/"} target='_blank'>
              <Button bgColor={"bg-primary"} text={"Visit Our Protfolio"} w={'w-[170px]'} textColor={"text-white"} />
            </Link>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-5">
              {/* menu */}
              <div className="menu">
                <h3 className='text-xl font-bold mb-3'>Important Links</h3>
                <ul>
                  {/* Menu */}
                  {menuLinks.map((link) => (
                    <li key={link.id} >

                      {/* loop for each link */}
                      <Link
                        to={link.path}
                        className="menuLinks py-3"
                      >
                        {link.name}
                      </Link>

                    </li>
                  ))}
                </ul>
              </div>
              {/* quickLinks */}
              <div className="quickLinks">
                <h3 className='text-xl font-bold mb-3'>Quick Links</h3>
                <ul>
                  {/* Menu */}
                  {quickLinks.map((link) => (
                    <li key={link.id} >

                      {/* loop for each link */}
                      <Link
                        to={link.path}
                        className="menuLinks py-3"
                      >
                        {link.name}
                      </Link>

                    </li>
                  ))}
                </ul>
              </div>
              {/* web information */}
              <div className="info col-span-2 sm:col-auto">
                <h2 className='text-xl font-bold mb-6'>Address</h2>
                <div className="text-[16px] text-gray-400 font-semibold">
                  <ul>
                    <li><FontAwesomeIcon icon={faLocationDot} /> Yemen, Hadramout</li>
                    <li className='my-7'><FontAwesomeIcon icon={faPhone} /> +967 739712712</li>
                    <li className='text-3xl'>
                      <Link to={"https://api.whatsapp.com/send/?phone=967739712162&text&type=phone_number&app_absent=0"} target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='hover:text-primary mx-2 duration-200' /></Link>
                      <Link to={"https://www.instagram.com/a.ben_saad/"} target='_blank'><FontAwesomeIcon icon={faInstagram} className='hover:text-primary mx-2 duration-200' /></Link>
                      <Link to={"https://github.com/Abdou1001"} target='_blank'><FontAwesomeIcon icon={faGithub} className='hover:text-primary mx-2 duration-200' /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
