

const Hero = () => {
    return (
        <section className="">
    <div className="hero min-h-screen rounded-2xl" style={{backgroundImage: 'url(./src/assets/banner.png)'}}>
  <div className="hero-overlay bg-opacity-60  rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content rounded-2xl">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
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