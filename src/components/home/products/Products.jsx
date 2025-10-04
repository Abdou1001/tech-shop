import React from 'react'
import Heading from '../../shared/Heading'
// images
import Img1 from "../../../assets/products-img/p-1.jpg";
import Img2 from "../../../assets/products-img/p-2.jpg";
import Img3 from "../../../assets/products-img/p-3.jpg";
import Img4 from "../../../assets/products-img/p-4.jpg";
import Img5 from "../../../assets/products-img/p-5.jpg";
import Img6 from "../../../assets/products-img/p-6.jpg";
import Img7 from "../../../assets/products-img/p-7.jpg";
import Img8 from "../../../assets/products-img/p-8.jpg";
import ProductCard from './ProductCard';

const Products = () => {

    const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: 220,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: 120,
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: 420,
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: 320,
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img8,
    title: "Printed",
    price: 220,
    aosDelay: "600",
  },
];



  return (
    <div className='container py-30 dark:text-white'>
        {/* Header */}
        <Heading title={"Our Products"} subtitle={"Explore Our Products"} />

        {/* Body */}
        <ProductCard proData={ProductsData}/>
    </div>
  )
}

export default Products
