import React from 'react'
import { BsBank } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { BsHospital } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { BsCameraReels } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";





const Expertise = () => {
    const data=[{
        title:'Banking',
        icon: <BsBank size={'50px'} color="#F39101" className='ml-6 mt-6' />,
        description:'Accelerate your banking operations with PRKGlobal360 comprehensive facility management solutions. Optimize efficiency, reduce costs, and enhance the banking experience for employees and customers.',
    },
    {
        title:'Corporate',
        icon:     <BsBuilding  size={'50px'} color="#F39101" className='ml-6 mt-6'/>,
        description:'Maximize your operation potential with our expert facility management and business solutions. Our comprehensive services ensure seamless operations, cost savings, and an optimal work environment.',
    },
    {
        title:'Healthcare',
        icon:     <BsHospital  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'Complete 360° facility solutions for healthcare that ensure smooth operations, optimal patient care, and regulatory compliance. From maintenance and security to cleaning and waste management, we handle every aspect of facility upkeep.',
    },
    {
        title:'Residential',
        icon:     <BsHouseDoor  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'Our 360° residential facility management services are designed to enhance the living experience. We take care of property maintenance, security, landscaping, and more ensuring that your residential community is well-maintained and safe.',
    },
    {
        title:'Commercial',
        icon:     <RiExchangeDollarLine  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'RKGlobal360 Commercial facility management services offer the unique needs of businesses, ensuring a well-maintained and efficient work environment. Focus on your core business while we take care of your facility. maximizing productivity and cost-efficiency.',
    },
    {
        title:'Hospitality',
        icon:     <FaRegHospital  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'PRKGlobal360 hospitality facility management services are tailored to meet the specific needs of the hospitality industry. From maintenance and housekeeping to event management and guest services, we elevate your hospitality business to new heights of excellence.',
    },
    {
        title:'Manufacturing Industries',
        icon:     <MdOutlinePrecisionManufacturing  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'Our 360° facility management solutions for manufacturing industries are designed to optimize productivity and streamline operations. With our expertise, you can focus on production while we ensure a safe, efficient, and well-maintained facility that meets industry standards.',
    },
    {
        title:'Transportation',
        icon:     <BsTruck  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'Our comprehensive 360° facility management services for transportation ensure the smooth operation of your infrastructure. From maintenance and repairs to security, we handle it all.',
    },
    {
        title:'Entertainment',
        icon:     <BsCameraReels  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
        description:'PRKGlobal360 facility management services for entertainment give an unforgettable experience to customers. Our experts handle everything from venue maintenance and equipment upkeep to security and cleanliness.',
    },



]

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white border border-gray-200 rounded-lg shadow mx-4 overflow-hidden"
        >
          <a href="#">
            {item.icon}
          </a>
          <div className="p-5 overflow-hidden">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 overflow-hidden">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;