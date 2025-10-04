import React, { useContext, useState } from 'react'
import { varContext } from '../../App';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const Items = () => {

    // popup when click on buttons to login in the website
    const { setShowPopup } = useContext(varContext);


    const handlePopup = () => {
        setShowPopup(s => !s)
    }

    // items in the cart 
    const { numItemCart, setNumItemCart } = useContext(varContext);
    // total price
    const totalPrice = numItemCart.reduce((acc, item) => acc + Number(item.price), 0);
    // delete element from the cart
    const handleDelete = (id) =>{
        setNumItemCart(i => i.filter(e => e.id !== id))
        
    }

    return (
        <div>
            <div className="grid grid-cols-3 py-20 gap-20 min-h-[70vh] px-5">
                <div className="items col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-8">
                        {/* check if there elements in the cart */}
                        {(numItemCart.length > 0) ?
                            //loop for elements 
                            numItemCart.map(item => (
                                <div className="" key={item.id}>
                                    {/* img and delete button */}
                                    <div className="img relative group">
                                        {/* button to delete */}
                                        <div className="close absolute left-3 top-3 bg-black/70 w-[30px] h-[30px] rounded-full 
                                            flex justify-center items-center font-bold cursor-pointer hidden group-hover:flex"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                        X
                                        </div>
                                        {/* img */}
                                        <img src={item.img} alt={item.title} className='rounded-xl w-[260px] object-cover' />
                                    </div>
                                    {/* info */}
                                    <div className="text font-[600] mt-2">
                                        <h2 className='title'>{item.title}</h2>
                                        <span className="price">${item.price}</span>
                                    </div>
                                </div>
                            ))
                            // if there no element
                            :
                            <div className='col-span-3 font-bold text-center'>
                                <h3 className='text-xl '>No items on the Cart</h3>
                            </div>
                            
                        }
                    </div>
                </div>
                {/* total price */}
                <div className="price font-bold">
                    <h2 className='mb-3'>Estimated price:</h2>
                    <span className='text-3xl inline-block mb-5'>${totalPrice.toFixed(2)}</span>
                    {numItemCart.length > 0
                        ? <div onClick={handlePopup}><Button text={"Order"} bgColor={"bg-primary"} textColor={"text-white"} w='w-[200px]' /></div> 
                        : <Link to={"/"}><Button text={"Back Home"} bgColor={"bg-primary"} textColor={"text-white"} w='w-[200px]' /></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Items
