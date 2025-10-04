import React, { useContext } from 'react';
// button component
import Button from '../../shared/Button';
// imgs
import Image1 from "../../../assets/category-img/earphone.png";
import Image2 from "../../../assets/category-img/watch.png";
import Image3 from "../../../assets/category-img/macbook.png";
import Image4 from "../../../assets/category-img/gaming.png";
import Image5 from "../../../assets/category-img/vr.png";
import Image6 from "../../../assets/category-img/speaker.png";
// popup
import { varContext } from '../../../App';


const Category = () => {

    // popup when click on buttons to login in the website
    const { setShowPopup } = useContext(varContext);


    const handlePopup = () => {
        setShowPopup(s => !s)
    }

    return (
        <div className='container py-8'>

            {/* first row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-8">
                {/* First col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-black to-black/80 rounded-3xl relative h-[300px] 
                flex items-end">
                    <div>
                        {/* text */}
                        <div className="text mb-4">
                            <p className='mb-2 text-gray-400'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-20 mb-1'>Earphone</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-primary" textColor="text-white"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image1} alt="earphone" className='absolute bottom-0' />
                    </div>
                </div>

                {/* Second col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/80 rounded-3xl relative h-[300px] 
                flex items-end">
                    <div>
                        {/* text */}
                        <div className="text mb-4 overflow-x-hidden">
                            <p className='mb-2'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-40 mb-1'>Gadget</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-white" textColor="text-brandYellow"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image2} alt="earphone" className='absolute top-0 right-0 w-[170px]' />
                    </div>
                </div>

                {/* Third col */}
                <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/80 rounded-3xl relative h-[300px] 
                flex items-end">
                    <div>
                        {/* text */}
                        <div className="text mb-4">
                            <p className='mb-2'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-40 mb-1'>Laptop</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-white" textColor="text-primary"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image3} alt="earphone" className='absolute top-[10%] right-0 sm:right-[30px] w-[250px]' />
                    </div>
                </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 lg:grid-cols-4 text-white gap-8">
                {/* First col */}
                <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-white rounded-3xl relative h-[300px] 
                flex items-end">
                    <div>
                        {/* text */}
                        <div className="text mb-4">
                            <p className='mb-2'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-40 mb-1'>console</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-primary" textColor="text-white"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image4} alt="earphone" className='absolute top-[10%] right-0 sm:right-[30px] w-[250px]' />
                    </div>
                </div>

                {/* Second col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/80 rounded-3xl relative h-[300px] 
                flex items-start">
                    <div>
                        {/* text */}
                        <div className="text">
                            <p className='mb-2'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-40 mb-1'>VR</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-white" textColor="text-brandGreen"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image5} alt="earphone" className='absolute top-[7%] lg:top-[63px] right-[-10px] lg:right-[-20px]' />
                    </div>
                </div>

                {/* Third col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/80 rounded-3xl relative h-[300px] 
                flex items-start">
                    <div>
                        {/* text */}
                        <div className="text mb-4">
                            <p className='mb-2 text-gray-400'>Enjoy</p>
                            <p className='mb-2 text-3xl font-semibold'>With</p>
                            <p className='text-4xl lg:text-5xl font-bold opacity-20 mb-1'>Speaker</p>
                            {/* button */}
                            <div onClick={handlePopup}>
                                <Button
                                    text="Browse" bgColor="bg-white" textColor="text-brandBlue"
                                />
                            </div>
                        </div>
                        {/* img */}
                        <img src={Image6} alt="earphone" className='absolute bottom-0 right-0 w-[200px]' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Category
