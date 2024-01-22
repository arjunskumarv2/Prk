import React from 'react'

const Key = () => {
    const data=[{
        title:'Industry Experts',
        image:'images/2.jpg',
        description:'As an industry expert, our personalized facility management services meet the unique needs of our clients, ensuring that their facilities are safe, functional, and sustainable.',

    },
{
    title:'Dedicated Team',
    image:'images/3.jpg',
    description:'PRK Global has its own in-house team of experienced professionals who are highly skilled in offering reliable solutions that meet your specific needs.'
},

{
    title:'Security Expert',
    image:'images/4.jpg',
    description:'As leading security experts, we utilize cutting-edge technology and best practices to deliver comprehensive security solutions, including the security guard, access control, video surveillance, and alarm systems.',
},
{
    title:'High Quality Service',
    image:'images/5.jpg',
    description:'Our services are offered by highly skilled technical experts who will ensure the smooth and efficient operation of your facility with the goal of zero downtime making us a high-quality service provider in the market.',
},

{
    title:'Result Oriented',
    image:'images/6.jpg',
    description:'We are a result-oriented facility management company offering solutions that maximize efficiency and ensure that your facility operates at peak performance with cost-effectiveness.',
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
            <img
              className="rounded-t-lg w-full"
              src={item.image}
              alt={item.title}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Key;