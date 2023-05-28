import React from 'react';
import { Link } from 'react-router-dom';
const Discount = () => {
     return (
      <div className="sm:p-6 py-2   p-0  bg-white border rounded mt-2  text-primary border-primary border-opacity-30 items-center">
	<div className="container mx-auto">
		<div className="sm:flex  sm:flex-row items-center justify-between">
			<h2 className="text-center text-3xl font-bold lg:text-6xl sm:text-3xl  tracking-tighter ">BUY AT LOWEST PRICE
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">

				<span className='font-semibold text-lg'>Home Delivery</span>
				<span className="">24/7 Support</span>
			</div>
			<Link to="/" rel="noreferrer noopener" className="px-5  lg:mt-0 sm:py-3 py-1 rounded-md border text-center block bg-primary text-white ">Shop Now</Link>
		</div>
	</div>
</div>
//           <div>
//                <section className="relative overflow-hidden rounded-lg pb-80 shadow-2xl lg:pb-0 border-2 my-12">
//   <div className="ml-auto p-8 text-center sm:p-12 lg:w-2/3">
//     <p className="text-sm font-semibold uppercase tracking-widest text-primary">
//       Run with the pack
//     </p>

//     <h2 className="mt-6 text-primary uppercase">
//       <span className="text-5xl text-primary sm:text-6xl">Get 20% off</span>
//       <span className="mt-2 block  text-sm">On your next order over $50</span>
//     </h2>

//     <a
//       className="mt-8 inline-block w-full bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white"
//       href=""
//     >
//       Get Discount
//     </a>

//     <p className="mt-12 text-xs font-medium uppercase text-gray-400">
//       Offer valid until 24th March, 2021 *
//     </p>
//   </div>

//   <div className="absolute bottom-0 left-0 h-80 w-full lg:h-full lg:w-1/3">
//     <img
//       alt="Trainer"
//       src="https://cdn.medistorebd.com/wp-content/uploads/2020/12/unnamed-510x510.jpg"
//       className="absolute inset-0 h-full w-full object-cover "
//     />
//   </div>
// </section>

//           </div>
     );
};

export default Discount;