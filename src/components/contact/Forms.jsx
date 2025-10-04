import React from 'react'

const Forms = () => {
    return (
        <div className='w-[65%] mx-auto'>
            <form method='post'>
                <input type="text" name='name' placeholder='Name' className='input-style' required />
                <input type="email" name='email' placeholder='Email' className='input-style' required />
                <input type="text" name='subject' placeholder='subject' className='input-style' />
                <textarea name="msg" id="msg" placeholder='Message' className='!rounded-2xl input-style resize-none h-30' required></textarea>
                <input type="submit" value="Submit" className='rounded-full py-2 cursor-pointer bg-primary text-white w-[150px] mt-5 mx-auto block' />
            </form>
        </div>
    )
}

export default Forms
