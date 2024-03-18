

const Hero = () => {
    return (
        <section className="">
    <div className="hero min-h-screen rounded-2xl" style={{backgroundImage: 'url(./src/assets/banner.png)'}}>
  <div className="hero-overlay bg-opacity-60  rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content rounded-2xl">
    <div className="max-w-xl">
      <h1 className=" text-[44px] font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">A recipe is a set of instructions that guides you through the process of creating a specific dish or beverage. It outlines the necessary ingredients, measurements, and step-by-step procedures to achieve a delicious outcome.</p>
      
        <div className="space-x-4">
            <button className="btn btn-primary rounded-full bg-[#0BE58A] text-black">Explore Now</button>
            <button className="btn bg-transparent rounded-full text-white">Our Feedback</button>
        </div>
       
    </div>
  </div>
</div>
</section>
    );
};

export default Hero;