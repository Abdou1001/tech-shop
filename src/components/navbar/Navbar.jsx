import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import Mode from './Mode'
import { varContext } from '../../App'


const Navbar = () => {




  // Number items in the cart
  const { numItemCart, setNumItemCart } = useContext(varContext);
  const [sticky, setSticky] = useState(false);
  const [animation, setAnimation] = useState(false);
  const { setShowPopup } = useContext(varContext);
  
  
  const handlePopup = ()  => {
    setShowPopup(s => !s)
  }


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
  const DropdownLinks = [
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

  // for barsMenu
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (window.pageYOffset >= 200) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 py-4 duration-400 
      ${sticky ? "left-0 -top-full" : "relative"}
      ${animation ? "top-0 sticky" : "sticky -top-full"}
      `} >
      <div>
        {/* Container */}
        <div className="container mx-auto flex justify-between">

          {/* Logo and Menu section */}
          <div className="left-side flex gap-8 items-center">

            {/* Logo */}
            <div className="logo">
              <Link to='/' >
                <h1 className='text-primary tracking-wider font-bold text-2xl sm:text-3xl'>
                  TECH SHOP
                </h1>
              </Link>
            </div>

            {/* Menu */}
            <div className="menu hidden lg:block">
              <ul className='flex items-center gap-4'>
                {/* Menu */}
                {menuLinks.map((link) => (
                  <li key={link.id} >

                    {/* loop for each link */}
                    <Link
                      to={link.path}
                      className="menuLinks px-4"
                    >
                      {link.name}
                    </Link>

                  </li>
                ))}

                {/* Dropdown */}
                <li>
                  <div className='menuLinks px-4 group relative cursor-pointer'>
                    Qiock Links
                    <span><FontAwesomeIcon icon={faCaretDown} className='group-hover:rotate-180 transition-all' /></span>

                    {/* Dropdown links */}
                    <div className='absolute z-50 left-0 top-5 rounded-lg shadow-lg p-2 w-[250px] hidden group-hover:block bg-white dark:bg-gray-900'>
                      <ul>
                        {DropdownLinks.map(link => (
                          <li key={link.id} >
                            {/* loop for each link */}
                            <Link
                              to={link.path}
                              className="menuLinks px-4 my-2 p-2 w-full"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* Bars mune, account, Search, cart and Mode section */}
          <div className="flex items-center right-side sm:text-xl text-lg text-gray-500 dark:text-gray-400 gap-3 sm:gap-6">

            {/* Bars mune for small screen */}
            <div className="block lg:hidden relative">
              
              {/* icon */}
              <div className="icon cursor-pointer" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
              </div>

              {/* links */}
              <ul className={`barsMenu flex items-center gap-4 flex-col absolute dark:bg-gray-900 bg-white
                        w-[150px] p-4 rounded-b-lg left-[-60px] top-60px ${!open && "hidden"}`}>

                {menuLinks.map((link) => (

                  <li key={link.id}>

                    {/* loop for each link */}
                    <Link
                      to={link.path}
                      className="menuLinks"
                    >
                      {link.name}
                    </Link>

                  </li>

                ))}

                <li>
                  {/* Sreach */}
                  <div className="search hover:text-primary duration-200 cursor-pointer text-sm font-bold">
                    Search
                  </div>
                </li>

                {/* Dropdown */}
                <li>
                  <div className='menuLinks group relative cursor-pointer'>
                    Qiock Links
                    <span><FontAwesomeIcon icon={faCaretDown} className='group-hover:rotate-180 transition-all' /></span>

                    {/* Dropdown links */}
                    <div className='absolute z-50 left-0 top-5 rounded-lg shadow-lg p-4 w-[170px] hidden group-hover:block bg-white dark:bg-gray-900 text-center'>
                      <ul>
                        {DropdownLinks.map(link => (
                          <li key={link.id} >
                            {/* loop for each link */}
                            <Link
                              to={link.path}
                              className="menuLinks my-2 w-full"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>

            </div>

            {/* account */}
            <div className="account hover:text-primary duration-200 cursor-pointer" onClick={handlePopup}>
              <FontAwesomeIcon icon={faUser} />
            </div>

            {/* Sreach */}
            <div className="search hover:text-primary duration-200 cursor-pointer hidden lg:block">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            {/* cart */}
            <div className="cart relative cursor-pointer hover:text-primary duration-200 ">
              <Link to={"/cart"}>
                <FontAwesomeIcon icon={faCartShopping} />
                {numItemCart.length > 0 ? <div className="numItemCart">{numItemCart.length}</div> : null}
              </Link>
            </div>

            {/* Mode */}
            <div className="mode">
              <Mode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
