import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseCatagory from '../Hooks/UseCatagory';
import { useNavigate } from 'react-router-dom';
const UpdateProduct = () => {
  const navigate=useNavigate();
    const {catagorys}=UseCatagory();
    const [firstImageUrl,setFirstImageUrl]=useState("")
    const [secondImageUrl,setsecondImageUrl]=useState("")
    const [thirdImageUrl,setThirdImageUrl]=useState("")
    const[productInfo,setProductInfo]=useState([]);
    // get single product by useParams
    const {id} = useParams();
    useEffect(()=>{
     const url=`http://localhost:5000/product/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setProductInfo(data))
},[])
    const nameChange = e => {
        const getName = e.target.value;
        const updateNewName = { name: getName,  price:productInfo.price,previcePrice:productInfo.previcePrice ,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory ,brand:productInfo.brand,keywords:productInfo.keywords};
        setProductInfo(updateNewName);     
    }
    const priceChange = e => {
        const getPrice = e.target.value;
        const updateNewPrice = { name: productInfo.name,previcePrice:productInfo.previcePrice, price: getPrice, image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory ,brand:productInfo.brand,keywords:productInfo.keywords}
        setProductInfo(updateNewPrice);
    }
    const previcePriceChange = e => {
        const getPrevicePrice = e.target.value;
        const updateNewPrevicePrcie = { name: productInfo.name, price:productInfo.price,previcePrice:getPrevicePrice,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory ,brand:productInfo.brand,keywords:productInfo.keywords}
        setProductInfo(updateNewPrevicePrcie);
    }
    const brandNameChange = e => {
        const getBrandName = e.target.value;
        const updateNewBrandName = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory,brand:getBrandName,keywords:productInfo.keywords }
        setProductInfo(updateNewBrandName);
    }
    const keywordsNameChange = e => {
        const getKeywordName = e.target.value;
        const updateNewKeywordsName = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory,brand:productInfo.brand,keywords:getKeywordName }
        setProductInfo(updateNewKeywordsName);
    }
    const categoryChange = e => {
        const getCategory = e.target.value;
        const updateNewCategory = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3, catagory:getCategory,details:productInfo.details,status:productInfo.status ,brand:productInfo.brand,keywords:productInfo.keywords}
        setProductInfo(updateNewCategory);
    }
    const statusChange = e => {
        const getStatus = e.target.value;
        const updateNewStatus = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3, catagory:productInfo.catagory,details:productInfo.details,status:getStatus ,brand:productInfo.brand,keywords:productInfo.keywords}
        setProductInfo(updateNewStatus);
    }
    const detailsChange = e => {
        const getDetails = e.target.value;
        const updateNewDetails = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice, image1: productInfo.image1,image2: productInfo.image2,image3: productInfo.image3, catagory:productInfo.catagory ,details:getDetails,status:productInfo.status ,brand:productInfo.brand,keywords:productInfo.keywords}
        setProductInfo(updateNewDetails);
    }
    const handleUpdateProduct = async(event) => {
      event.preventDefault();
     const url = `http://localhost:5000/product/${id}`;
     await axios.put(url,productInfo)
          toast.success('Update Successfully', {
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
          navigate("/deshboard/products")
    }   
    // image host key (imgbb) 
    const imageHostKey ="bd5d248a0758556e9b5c6d53c6383bdf";
  //  first Image 
    const uploadFirstImage=(e)=>{
      const image = e.target.files[0];
      if(e.target.files[0].size > 262144){
        alert("Your file size is greater than 250KB");
        e.target.value = "";
     };
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        setFirstImageUrl(imgData.data.url)
        if(imgData.success){
            const updateImage = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1: imgData.data.url,image2: productInfo.image2,image3: productInfo.image3,details:productInfo.details,catagory:productInfo.catagory ,status:productInfo.status ,brand:productInfo.brand,keywords:productInfo.keywords}
            setProductInfo(updateImage);
          }
        })}
    // second Image 
    const uploadSecondImage=(e)=>{
      const image = e.target.files[0];
      if(e.target.files[0].size > 262144){
        alert("Your file size is greater than 250KB");
        e.target.value = "";
     };
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        setsecondImageUrl(imgData.data.url)
          if(imgData.success){
            const updateImage1 = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1:  productInfo.image1,image2: imgData.data.url,image3:productInfo.image3,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory ,brand:productInfo.brand,keywords:productInfo.keywords}
            setProductInfo(updateImage1);
          }
        })}
     // third Image 
    const uploadThirdImage=(e)=>{
      const image = e.target.files[0];
      if(e.target.files[0].size > 262144){
        alert("Your file size is greater than 250KB");
        e.target.value = "";
     };
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        setThirdImageUrl(imgData.data.url)
          if(imgData.success){
            const updateImage3 = { name: productInfo.name, price:productInfo.price,previcePrice:productInfo.previcePrice,image1:  productInfo.image1,image2:  productInfo.image2,image3: imgData.data.url,details:productInfo.details,status:productInfo.status,catagory:productInfo.catagory  ,brand:productInfo.brand,keywords:productInfo.keywords}
            setProductInfo(updateImage3);
          }
        })}
     return (
     <div> 
  <form onSubmit={handleUpdateProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0  rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Update this product</h2>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Product name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={productInfo.name} onChange={nameChange}/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Product price</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={productInfo.price} onChange={priceChange}/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Product previous price</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={productInfo.previcePrice} onChange={previcePriceChange}/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Product Brand Name</label>
        <input type="text" id="name" name="brand" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={productInfo?.brand} onChange={brandNameChange}/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Keywords</label>
        <input type="text" id="name" name="keywords" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={productInfo?.keywords} onChange={keywordsNameChange}/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Change status</label>
        <select className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded' value={productInfo.status} onChange={statusChange}>
        <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>

        </select>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Select a Category</label>
        <select value={productInfo.catagory}  className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded'  onChange={categoryChange}>
          {
               catagorys.map(p=>
                    <option
                    key={p._id}
                    >{p.catagory}</option>
               )
          }
        </select>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Image Link</label>
        <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select a product Image</label>
                    <input onChange={uploadFirstImage} type="file" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
      </div>
        <img className='h-52 w-52 mx-auto border rounded  border-gray-300 ' src={productInfo.image1} alt="Product Image"/>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Image Link</label>
        <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select a product Image</label>
                    <input onChange={uploadSecondImage} type="file" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
      </div>
        <img className='h-52 w-52 mx-auto border rounded  border-gray-300 ' src={productInfo.image2} alt="Product Image" />
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Image Link</label>
        <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600"> select a product Image</label>
                    <input onChange={uploadThirdImage} type="file" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
      </div>
        <img className='h-52 w-52 mx-auto rounded border border-gray-300 ' src={productInfo.image3} alt="Product Image" />
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Product Description</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={productInfo.details} onChange={detailsChange}></textarea>
      </div>
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="save" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
  </div>
</section>
</form>
     </div>
     );
};
export default UpdateProduct;