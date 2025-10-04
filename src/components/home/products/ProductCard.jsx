import React, { useContext } from 'react'
import Button from '../../shared/Button'
import { varContext } from '../../../App';

const ProductCard = ({ proData }) => {
  const { numItemCart, setNumItemCart } = useContext(varContext);


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 gap-y-8'>
      {proData.map(data => (
        <div key={data.id} className='mx-auto' data-aos="zoom-in-up" data-aos-delay={data.aosDelay}>
          {/* img */}
          <div className="img relative group">
            <img src={data.img} alt={data.title} className='rounded-xl w-[260px] group-hover:blur-[2px] object-cover' />
            <div className="btn absolute left-1/2 top-1/2 translate-[-50%] hidden group-hover:block" onClick={() => { setNumItemCart(s => [...s, data]) }}>
              <Button bgColor={"bg-primary"} textColor={"text-white"} text={"Add to Cart"} link='' />
            </div>
          </div>
          <div className="text font-[600] mt-2">
            <h2 className='title'>{data.title}</h2>
            <span className="price">${data.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
