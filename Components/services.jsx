'use client'

import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('security');

  const handleTabClick = (data) => {
    console.log(data)
    console.log('munna')
    // setActiveTab(data);
  };

  const tabContents = [
     {
      title: 'Security',
      content: 'Our security force will always keep you safe and secure in any situation and at any time. Trust our line of defence and relax! We consider your safety to be our top priority.',
    },
     {
      title: 'Housekeeping',
      content: 'CLEAN.TIDY.SHINY. 3 mantras followed by our housekeeping angels to keep your community pristine and spotless. Worry less, our staff never compromises on finicality.',
    },
    {
      title: 'Helpdesk',
      content: '“Hello, How may I help you?” When it comes to resolving your queries and concerns, our helpdesk never says no to them. We equip the best helpdesk staffs to find a solution for every concern.',
    },
     {
      title: 'Multi-technician',
      content: 'You may call him superman! Our Multiple technician lends the community their helping hand in finishing the job in multiple segments. He juggles multiple tasks to make him the most reliable person.',
    },
    {
      title: 'Electrician',
      content: 'Handling electrical-related issues can be a real pain. But our experienced electricians have dealt with a countless number of issues keeping you and your community always away from the dark.',
    },
    {
      title: 'Pest control',
      content: 'Pests are a nuisance to any community! We equip a team who can exterminate these troublemakers to make your community pest-free and peaceful.',
    },
    {
      title: 'Gardening',
      content: 'Who doesn’t love gardening! But maintaining and nurturing the greenery in your surroundings needs a magical hand. We have the most experienced gardeners who can keep the flora evergreen!',
    },
     {
      title: 'Catering',
      content: 'Do you have a huge gathering that needs to have their bellies filled with delicious food? We offer the best catering service in town which serves you with the delicious feast of your preference.',
    },
    {
      title: 'Transport Services',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
     {
      title: 'Plumbing',
      content: 'These leaky pipes lead to a lot of water wastage. Just like how water is essential for life, a plumber is essential for fixing these issues regarding plumbing to conserve water. Our plumbing services include the best plumbers you can find to fix any leakage or water issues.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 px-4 md:px-20 justify-items-center mt-20">
      <div className="flex items-center">
        <div className="w-full">
        <span className="heading_text">Industry Expertise</span>
</div>
        </div>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50" id="defaultTab" role="tablist">
          {tabContents?.map((res,i) => (
            <div                onClick={(res) => handleTabClick(res)}
            key={i} className="me-2">
              <button
                id={i}
                type="button"
                role="tab"
                // aria-controls={i}
                // aria-selected={activeTab === tabId}
                className={`inline-block p-4  hover:bg-gray-100 `}
              >
                {res.title}
              </button>
            </div>
          ))}
        </ul>
        <div id="defaultTabContent">
          {Object.keys(tabContents).map((tabId) => (
            <div
              key={tabId}
              className={`hidden p-4 bg-white rounded-lg md:p-8 ${activeTab === tabId ? 'block' : ''}`}
              id={tabId}
              role="tabpanel"
              aria-labelledby={`${tabId}-tab`}
            >
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
                {tabContents[tabId].title}
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">{tabContents[tabId].content}</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                Learn more
                <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;