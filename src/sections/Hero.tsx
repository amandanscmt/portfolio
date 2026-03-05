const Hero = () => {
  return (
    <section className="relative min-h-screen bg-aurora-1 flex flex-col justify-center p-5">
      <h1
        className="text-[12vw]
        md:text-7xl
        lg:text-[8rem]
        font-display-2
        tracking-tight
      text-white
        mix-blend-difference
        leading-none
        uppercase"
      >
        Amanda Nascimento<span className="cursor-blink ml-2">|</span>
      </h1>
      <h2
        className="text-3xl font-sans font-extralight tracking-tight
      text-white
        mix-blend-difference
        leading-none"
      >
        Front-end Developer
      </h2>
    </section>
  );
};

export default Hero;
