import { GiAngryEyes } from "react-icons/gi";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { GiHeartWings } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";


const About = () => {
  const data=[{
    title:'Our Vision',
    icon: <MdOutlinePersonSearch size={'50px'} color="#F39101" className='ml-6 mt-6' />,
    description:'Our vision is to be the preferred facility management partner for businesses of all sizes, delivering sustainable and innovative solutions that drive productivity, efficiency, and growth.    ',
},
{
    title:'Our Mission',
    icon:     <MdOutlineRocketLaunch  size={'50px'} color="#F39101" className='ml-6 mt-6'/>,
    description:'Our mission is to provide world-class facility management services that enable our clients to focus on their core business activities, while we handle their facility needs with professionalism, safety, and quality.',
},
{
    title:'Core Values',
    icon:     <GiHeartWings  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
    description:'At PRKGlobal360, we are guided by our core values of integrity, transparency, accountability, and excellence. These values underpin everything we do, from our service delivery to our client relationships.',
},
{
    title:'Sustainability',
    icon:     <GiPineTree  size={'50px'} color="#F39101" className='ml-6 mt-6'/>        ,
    description:'We recognize the importance of sustainability and the impact of our actions on the environment. We are committed to providing eco-friendly solutions that support our clients sustainability goals while promoting the wellbeing of the planet',
},

  ]
  return (
    <div>
 <div class="grid grid-cols-2 gap-4 ml-20 mt-10">
      <div className="flex items-center">
        <div className="w-full">
        <h4 className="heading_text">
      We<span className="orange_gradient">PRKGlobal360</span>, Elevate to Facilitate.
    </h4>

          <p className="mt-4">
          PRKGLOBAL360 is a dynamic and forward-thinking company dedicated to delivering top of the line facility management services. Established with a vision to transform the management landscape, we blend expertise with a customer-centric approach, ensuring our clients receive unparalleled service and support. Welcome to the new age of facility management and enhance your experience with us!
          </p>
        </div>
      </div>
      <div>
        <img src="images/0.jpeg" className="mt-30" width={500} />
      </div>
      </div>



<div className="mt-40 ml-20">
          <h4 className="heading_text">
           Our Team
          </h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/hk9.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/Electrician3.JPG" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" images/Helpdesk1.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" images/pest2.JPG " alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" images/hk mach4.JPG" alt=""/>
        </div>
    </div>
 
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/sec.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/hk2 maop.JPG " alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" images/Pest c4918.JPG" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/hk7.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/Electrician2.JPG " alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="images/multi technician.JPG " alt=""/>
        </div>
    </div>
 
    
</div>
</div>


<div className="grid grid-cols-4 gap-4 mt-20 mb-20 mx-10">

{
data.map((item)=>(
                    <div class="max-w-sm   bg-white border border-gray-200 rounded-lg shadow mx-4">
                    <a href="#">
                    {item.icon}
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">{item.description}</p>
                    </div>
                </div>
         ))       }


</div>
      
    </div>

  );
};

export default About;
