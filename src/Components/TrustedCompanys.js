import React from 'react';
const TrustedCompanys = () => {
     return (
          <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-bold text-lg md:text-4xl text-gray-600 text-center">
                Our Strategic Partner
                </h3>
                <div className="mt-6">
                    <ul className="grid grid-cols-4 bg-white flex items-center jus">
                        {/* LOGO 1 */}
                      <li><img className='h-20 sm:h-32 w-auto py-4 bg-white' src="https://i.ibb.co/PwRQ7Sk/r.png" alt="" /></li>
                      <li><img className='h-20 sm:h-32 w-auto py-4' src="https://i.ibb.co/Px4cPPP/logo.jpg" alt="" /></li>
                      <li><img className='h-20 sm:h-32 w-auto py-4' src="https://i.ibb.co/q7hF33v/dasf.png" alt="" /></li>
                      <li><img className='h-20 sm:h-32 w-auto py-4' src="https://i.ibb.co/wWMKk2z/images.png" alt="" /></li>

                    </ul>
                </div>
            </div>
        </div>
     );
};
export default TrustedCompanys;