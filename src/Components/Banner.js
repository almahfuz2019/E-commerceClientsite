import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
     return (
          <>
<section
  className="relative bg-[url(https://www.cdc.gov/nchs/images/covid19/nhcs/encounters.jpg?_=36402=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-primary">
          Forever Home.
        </strong>
      </h1>
      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link 
          to="/all-Products"
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>
        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto border border-2 border-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

               
          </>
     );
};

export default Banner;