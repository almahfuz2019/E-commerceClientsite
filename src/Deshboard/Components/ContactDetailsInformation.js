import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const ContactDetailsInformation = () => {
     const [specificUserContactInfo, setSpecificUserContactInfo] = useState({});
     const { id } = useParams();
     useEffect(() => {
          const url = `http://localhost:5000/contact/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSpecificUserContactInfo(data));
     }, []);
     return (
          <div className='ml-2 sm:p-5 sm:pb-10 bg-white'>
               <a  href = "javascript:history.back()"><span className="pl-2 text-2xl  text-primary">
                <FaArrowCircleLeft/></span></a>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png" />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs   text-black">  {specificUserContactInfo.dateAndTime}</time>
  </div>
  <div className="chat-bubble bg-gray-100 text-black"> {specificUserContactInfo.message}</div>
  <div className="chat-footer text-black">
  {specificUserContactInfo.email}
  </div>
</div> 
          </div>
     );
};
export default ContactDetailsInformation;