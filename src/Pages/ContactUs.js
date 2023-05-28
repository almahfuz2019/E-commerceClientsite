import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const ContactUs = () => {
  const time= new Date().toLocaleString();
  const ContactUS=async(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const message=event.target.message.value;
    const dateAndTime=time;
    const contactInfo={email,message,dateAndTime};
    await axios.post("http://localhost:5000/contact",contactInfo)
    toast.success('Submitted Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      });
     event.target.reset();
 }
     return (
          <div className='bg-white p-2 sm:p-5 pb-5'>
                 <nav aria-label="Breadcrumb" className="flex justify-center mt-5 mb-3">
  <ol role="list"
    className="flex overflow-hidden rounded-lg border-primary border"
  >
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
        className="absolute inset-y-0 -left-px h-9 w-4 bg-primary [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]">
      </span>
      <a
        href="#"
        className="flex h-9 items-center bg-white pl-8 pr-4 text-xs font-medium transition hover:text-gray-900"
      >
        Contact US
      </a>
    </li>
  </ol>
</nav>
               <div>
               <h1 className='sm:text-4xl md:text-5xl text-2xl mb-5 font-bold text-center'>Contact Us</h1>
          </div>
       <section className="text-white body-font relative">
  <div className="absolute inset-0 ">
    <iframe  marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d238350.24003385997!2d91.80934815528343!3d24.925214354262504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.8962036!2d91.8745886!4m5!1s0x3750552bc71c899d%3A0x804e438bcc32b390!2smetropolitan%20university%20google%20map!3m2!1d24.9301381!2d91.9730172!5e0!3m2!1sbn!2sbd!4v1684763292015!5m2!1sbn!2sbd" width="100%" height="100%" frameborder="0"></iframe>
  
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-primary rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-semibold title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-white"> Medicine wearhouse is all kinds o fsurgical goods whole saler and retailer.</p>
      <form onSubmit={ContactUS}>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input required  type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-white">Message</label>
        <textarea required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <input className="text-gray-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg cursor-pointer" type="submit" value="Submit"/>
      </form>
      <p className="text-xs text-white mt-3">It's very important. So,be careful.</p>
    </div>
  </div>
</section>

          </div>
     );
};
export default ContactUs;