import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faShieldHalved, faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Services = () => {

    const ServiceData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faTruckFast} className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faWallet} className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faShieldHalved}  className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faHeadset} className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support Anytime",
  },
];

  return (
    <div className='container py-20'>
        <div className="grid grid-cols-2 lg:grid-cols-4 dark:text-white gap-8 gap-y-8">
            {/* loop for Service Data */}
            {ServiceData.map((data, i) => (
              <div key={data.id} className='flex gap-5 flex-col sm:flex-row items-center text-center sm:text-left' data-aos="fade-up" data-aos-delay={`${i + i}00`} data-aos-offset="100">
                    <div className="icon">
                        {data.icon}
                    </div>
                    <div className="text">
                        <h2 className='font-bold text-lg sm-text-3xl'>{data.title}</h2>
                        <p className='text-xs sm:text-sm text-gray-400 font-medium'>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
