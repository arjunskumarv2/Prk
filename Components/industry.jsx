import React from 'react'
import Expertise from './expertise'


const Industry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 px-4 md:px-20 justify-items-center mt-20">
      <div className="flex items-center">
        <div className="w-full">
          <span className="heading_text">Industry Expertise</span>
          <h4 className="head_text">
            {/* Your heading content */}
          </h4>
          <p className="">
            PRKGlobal360, where industry expertise reigns supreme. Packed with years of experience and deep business understanding in below respective fields, we pride ourselves on being leaders in delivering unparalleled knowledge and solutions to our clients. Our highly skilled team brings a wealth of industry-specific knowledge, ensuring that our solutions are tailor-made to address unique challenges and opportunities. From strategy development to implementation, our industry expertise sets us apart, empowering our clients to navigate the complexities of their markets with confidence.
          </p>
        </div>
      </div>
      <Expertise />
    </div>
  );
};

export default Industry;