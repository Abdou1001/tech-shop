import React, { useContext, useState } from 'react'
import { varContext } from '../../App';


const Popup = () => {
    const { showPopup, setShowPopup } = useContext(varContext);
    const [toggleRegister, setToggleRegister] = useState(false);


    const handlePopup = () => {
        setShowPopup(s => !s)
    }

    const handleRrgister = () => {
        setToggleRegister(t => !t)
    }



    return (
        <div className='popup w-full h-full bg-black/60 fixed left-0 top-0 z-50 flex justify-center items-center'>
            <div className="content bg-white dark:bg-gray-900 w-[300px] p-5 text-gray-900 dark:text-white rounded-xl relative white">
                <div className="cancle absolute right-3 top-5 bg-gray-300 dark:bg-gray-700 w-7 h-7 flex justify-center items-center rounded-full font-bold cursor-pointer text-sm"
                    onClick={handlePopup}>
                    X
                </div>
                <div className={`login ${toggleRegister ? "hidden" : "block"}`}>
                    <h2 className='font-semibold mb-5 text-center'>Welcome Back</h2>
                    <form method={"post"}>
                        {/* user name */}
                        <input type="text" name='username' placeholder='Username Or Email' className='input-style' required />
                        {/* Password */}
                        <input type="password" name='password' placeholder='Password' className='input-style' required min={8} />
                        {/* button */}
                        <input type="submit" value="Submit" className='rounded-full py-2 cursor-pointer bg-primary text-white w-[150px] mt-5 mx-auto block' required/>
                    </form>
                    {/* other button */}
                    <div className="btns mt-5 text-sm text-gray-800 dark:text-gray-400">
                        <button className='cursor-pointer' onClick={handleRrgister}>Forgot the password ?</button>
                        <button className='cursor-pointer mt-3' onClick={handleRrgister}>Create a new account</button>
                    </div>
                </div>
                <div className={`register ${toggleRegister ? "block" : "hidden"}`}>
                    <h2 className='font-semibold mb-5 text-center'>Hi, Welcome</h2>
                    <form method='post'>
                        {/* username */}
                        <input type="text" name='username' placeholder='Username' className='input-style' required />
                        {/* username */}
                        <input type="text" name='Email' placeholder='Email' className='input-style' required />
                        {/* Password */}
                        <input type="password" name='password' placeholder='Password' className='input-style' required min={8} />
                        {/* other button */}
                        <div className="btns text-sm text-gray-800 dark:text-gray-400">
                            <input type="checkbox" name="agree" id="agree" className='text-gray-700' />
                            <label htmlFor="agree" className='mx-2'>I agree to all terms and conditions</label>
                        </div>
                        {/* button */}
                        <input type="submit" value="Submit" className='rounded-full py-2 cursor-pointer bg-primary text-white w-[150px] mt-5 mx-auto block' />
                    </form>
                    {/* other button */}
                    <div className="btns mt-5 text-sm text-gray-800 dark:text-gray-400">
                        <button className='cursor-pointer mt-3' onClick={handleRrgister}>I have an account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
