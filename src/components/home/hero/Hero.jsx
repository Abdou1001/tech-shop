// react-slick library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


// imgs
import Image1 from "../../../assets/hero-img/headphone.png";
import Image2 from "../../../assets/hero-img/vr.png";
import Image3 from "../../../assets/hero-img/macbook.png";
import Button from '../../shared/Button';
// context popup
import { useContext } from "react";
import { varContext } from "../../../App";




const Hero = () => {

  // popup when click on buttons to login in the website
  const { setShowPopup } = useContext(varContext);


  const handlePopup = () => {
    setShowPopup(s => !s)
  }

  // remove Slider's arrows library
  function SampleNextArrow(props) {
    const { className, style, } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
      />
    );
  }



  // setting for slick Slider
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />
  };

  // Hero data

  const HeroData = [
    {
      id: 1,
      img: Image1,
      title: "Headphone",
      subtitle: "Beats Solo",
      feature: "Wireless",
    },
    {
      id: 2,
      img: Image2,
      title: "Virtual",
      subtitle: "Beats Solo",
      feature: "Wireless",
    },
    {
      id: 3,
      img: Image3,
      title: "Laptops",
      subtitle: "Beats Solo",
      feature: "Branded",
    },
  ];



  return (
    <header className='container mx-auto  h-[100dvh] bg-gradient-to-l dark:from-gray-800 dark:to-gray-900 from-gray-100 to-gray-300 rounded-4xl overflow-hidden p-4 flex justify-center items-center'>
      <div className="pb-8 sm:pb-0 w-full dark:text-white relative z-20 px-3">
        {/* Slider */}
        <Slider {...settings} >
          {/* loop for each data */}
          {HeroData.map((data => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 pb-8 sm:pb-0 mt-3">
                {/* text */}
                <div className='flex justify-center flex-col gap-4 font-bold sm:pl-3 sm:order-1 order-2'>
                  {/* subtitle */}
                  <span className='text-xl sm:text-2xl' data-aos="zoom-out" >{data.subtitle}</span>
                  {/* feature */}
                  <h3 className='text-5xl sm:text-6xl lg:text-7xl' data-aos="zoom-out" data-aos-delay="200">{data.feature}</h3>
                  {/* title */}
                  <h2 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px]' data-aos="zoom-out" data-aos-delay="300">{data.title}</h2>
                  {/* buuton */}
                  <div data-aos="zoom-in-up" onClick={handlePopup}>
                    <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" w="w-[200px]" data-aos-delay="300" />
                  </div>
                </div>
                {/* img */}
                <div className='sm:order-2 order-1 h-[400px] flex items-center' data-aos="zoom-in" data-aos-delay="500">
                  <img src={data.img} alt={data.title}
                    className='w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] sm:scale-105 lg:scale-125 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
                </div>
              </div>
            </div>
          )))}
        </Slider>
      </div>
    </header>
  )
}

export default Hero
