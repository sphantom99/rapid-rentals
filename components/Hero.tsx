import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col scroll-smooth  px-4 md:px-12 overflow-visible min-h-full h-screen justify-around">
      <div className="flex flex-col justify-start gap-6 p-8">
        <h1 className="font-bold text-xl md:text-3xl ">
          Own the car of your dreams in just a few clicks!
        </h1>
        <h2 className="text-xs md:text-lg text-slate-400 ">
          Streamline your car purchasing experience with our top of the line
          customer service and huge catalogue
        </h2>
        <a
          href="#carCatalogue"
          className="text-center scroll-smooth ml-4 w-2/6 md:w-1/12 bg-yellow-400 text-white rounded-lg p-1"
        >
          Explore
        </a>
      </div>
      <div className="flex justify-center">
        <svg
          className="absolute z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffd700"
            fillOpacity="1"
            d="M0,320L60,277.3C120,235,240,149,360,106.7C480,64,600,64,720,69.3C840,75,960,85,1080,96C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <Image
          className="z-10 relative right-0"
          alt="image of a car"
          src="/indexPorsche.png"
          height={600}
          width={600}
        />
      </div>
    </section>
  );
}

export default Hero;
