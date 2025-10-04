import React from 'react'
import Heading from '../../shared/Heading'
import Img1 from "../../../assets/blogs-img/blog-1.jpg"
import Img2 from "../../../assets/blogs-img/blog-2.jpg"
import Img3 from "../../../assets/blogs-img/blog-3.jpg"
import { Link } from 'react-router-dom'

const Blogs = () => {

    const BlogData =
    [
        {
            id: 1,
            title: "How to choose perfect smartwatch",
            subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Dilshad",
            image: Img1,
        },
        {
            id: 2,
            title: "How to choose perfect gadget",
            subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Satya",
            image: Img2,
        },
        {
            id: 3,
            title: "How to choose perfect VR headset",
            subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
            published: "Jan 20, 2024 by Sabir",
            image: Img3,
        },
    ];


  return (
    <div className='container pb-10 dark:text-white'>
        {/* title and subtitle */}
        <div className="title">
            <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>
        </div>

        {/* Blogs */}
        <div className="blog grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {
                BlogData.map(data => (
                    <div key={data.id} className='bg-gray-100 dark:bg-gray-800/30 px-3 py-6 rounded-xl'>
                        <Link to={`blog-id=${data.id}`}>
                            {/* img */}
                            <div className="img">
                                    <img src={data.image} alt={data.title} className='w-full h-[200px] object-cover rounded-xl'/>
                            </div>

                            {/* text */}
                            <div className="text">
                                <span className='text-gray-500 text-[12px] font-medium'>{data.published}</span>
                                <h2 className='my-3 font-bold'>{data.title}</h2>
                                <p className='text-gray-500 text-[13px] font-medium'>{data.subtitle}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs
