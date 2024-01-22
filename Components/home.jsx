

const Home = () => {
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-20">
      <div className="flex items-center">
        <div className="w-full">
          <span className="orange_gradient head_text">360° Solution</span>
          <h4 className="head_text">
            {/* Your heading content */}
          </h4>
          <p className="desc">
            Building Secure And Innovative Business Solutions In 360°.
          </p>
          <p className="mt-4">
            Reliable And Consistent Service | Cost-Effective Technology Driven solutions | Sustainable Practice | Efficient And Timely Response | Safety And Compliance Standards | Expertise In Innovation...
          </p>
          <button type="button" className="orange_btn">
            Know more
          </button>
        </div>
      </div>
      <div className="md:mt-0">
        <img src="images/1.png" className="mt-8 md:mt-0 w-full md:w-auto" alt="Description" />
      </div>
    </div>
  );
};

export default Home;