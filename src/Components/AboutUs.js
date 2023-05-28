import React from 'react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
     return (
         <div className='bg-white p-2 sm:p-5 pb-5'>
  <nav aria-label="Breadcrumb" className="flex justify-center mt-5 mb-3">
  <ol role="list"
  className="flex overflow-hidden rounded-lg border-primary border">
    <li className="flex items-center">
      <Link
        to="/"
        className="flex h-9 items-center bg-primary px-4 transition  text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <span className="ml-1.5 text-xs font-medium text-white"> Home </span>
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -left-px h-9 w-4 bg-primary [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
      >
      </span>
      <a
        href="#"
        className="flex h-9 items-center bg-white pl-8 pr-4 text-xs font-medium transition hover:text-gray-900">
        About US
      </a>
    </li>
  </ol>
</nav>
               <div className=''>
               <h1 className='sm:text-4xl md:text-5xl text-2xl mb-5 font-bold text-center'>About US</h1>
      
          <p className='mx-4 md:mx-0 text-justify '>
          <span className='font-semibold'>Medicine Wearhouse</span> is a trusted e-commerce platform that offers a wide range of products to customers across Bangladesh. Established with the aim of providing customers with high-quality, reliable products at affordable prices, <span className='font-semibold'>Medicine wearhouse</span> has quickly become a go-to destination for those looking to shop online. <br className='mb-2' />
At <span className='font-semibold'>Medicine wearhouse</span>, we believe in providing our customers with the best possible experience. That's why we have a user-friendly website that is easy to navigate, and we offer a variety of payment options to make the buying process as seamless as possible.
We offer a range of products across different categories, including healthcare, medical care, and beauty care. Whether you're looking for surgical products, first aid kits, laboratory equipment, or beauty products, you'll find everything you need at <span className='font-semibold'>Medicine wearhouse</span>. We take pride in our commitment to quality, so you can rest assured that all our products are authentic and of the highest standard. <br className='mb-2' />
Our team at <span className='font-semibold'>Medicine wearhouse</span> is made up of passionate, dedicated professionals who are committed to providing the best possible customer service. We work tirelessly to ensure that our customers are satisfied with their purchases and that their orders are delivered promptly and efficiently. <br className='mb-2' />
Our vision at <span className='font-semibold'>Medicine wearhouse</span> is to become the top e-commerce platform in Bangladesh by providing customers with an exceptional shopping experience. We strive to build long-lasting relationships with our customers based on mutual trust and respect. <br className='mb-2' />
In conclusion, at <span className='font-semibold'>Medicine wearhouse</span>, we're committed to providing customers with the best possible experience when it comes to shopping online. With a wide range of products, competitive prices, and exceptional customer service, we're confident that we'll continue to be the go-to destination for online shopping in Bangladesh.

</p>
</div>
         </div>
     );
};
export default AboutUs;