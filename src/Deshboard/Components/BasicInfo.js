import React, { useEffect, useState } from 'react';
const BasicInfo = () => {
  const [products,setProducts]=useState([])
  const [orders,setOrders]=useState([])
  const [watingOrders,setWatingOrders]=useState([])
  const [doneOrders,setDoneOrders]=useState([])
  const [shipmentOrders,setShipmentOrders]=useState([])
  const [contaCtcount,setContactCount]=useState([])
  const [allOrdersitem,setAllOrdersitem]=useState([])
  const [ordersBydateandtime,setordersBydateandtime]=useState([])
 

  // get all orders 
  useEffect(()=>{
    fetch(`http://localhost:5000/allorders`)
    .then(res=>res.json())
    .then(data=>setAllOrdersitem(data))
  },[])
 // get all "Done" status orders condition
  let DoneAmount=0;
  for(let item of allOrdersitem){
    if(item.status==="Done"){
      DoneAmount=DoneAmount+item.TotalPrice;
    }
  }
 // get all "Shipment" status orders condition
  let ShipmentAmount=0;
  for(let item of allOrdersitem){
    if(item.status==="Shipment"){
      ShipmentAmount=ShipmentAmount+item.TotalPrice;
    }
  }
 // get all "Cencel" status orders condition
  let CencelAmount=0;
  for(let item of allOrdersitem){
    if(item.status==="Cancel"){
      CencelAmount=CencelAmount+item.TotalPrice;
    }
  }
    // get all "Wating" status orders condition
  let WatingAmount=0;
  for(let item of allOrdersitem){
    if(item.status==="Waiting"){
      WatingAmount=WatingAmount+item.TotalPrice;
    }
  }
    // get all Orders "search by dateandtime" orders 
//   useEffect(()=>{
//     fetch(`http://localhost:5000/productssearchbydateandtime?dateAndTime=${time}`)
//     .then(res=>res.json())
//     .then(data=>setordersBydateandtime(data))

// },[])
  // get all "Shipment" status orders 
  useEffect(()=>{
    fetch(`http://localhost:5000/orders?status=Shipment`)
    .then(res=>res.json())
    .then(data=>setShipmentOrders(data))

},[])
  // get all "Wating" status orders 
  useEffect(()=>{
    fetch(`http://localhost:5000/orders?status=Wating`)
    .then(res=>res.json())
    .then(data=>setWatingOrders(data))

},[])
  // get all "Done" status orders 
  useEffect(()=>{
    fetch(`http://localhost:5000/orders?status=Done`)
    .then(res=>res.json())
    .then(data=>setDoneOrders(data))

},[])
  // get all "user contacts" count 
  useEffect(()=>{
    fetch("http://localhost:5000/userscontactinfocount")
    .then(res=>res.json())
    .then(data=>setContactCount(data))

},[])
  // get all "Orders" count 
  useEffect(()=>{
    fetch("http://localhost:5000/orderscount")
    .then(res=>res.json())
    .then(data=>setOrders(data))

},[])
  // get all "Products" count allproductscount
  useEffect(()=>{
    fetch("http://localhost:5000/allproductscount")
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[])
  // Greetings for Boss
let timeOfDay;
const date = new Date();
const hours = date.getHours();
if (hours < 12) {
  timeOfDay = 'Good Morning';
} else if (hours >= 12 && hours < 17) {
  timeOfDay = 'Good Afternoon';
} else {
  timeOfDay = 'Good Night';
}
     return (
          <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
            <div className="text-3xl ">
              <h2 className="text-4xl font-bold text-primary sm:text-5xl ">
                 {timeOfDay}, Boss.
           
              </h2>
            </div>
        
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Products
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">
                    {products.count}
                  </dd>
                </div>
        
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{orders.count}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Pending Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{watingOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Completed Orders
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{doneOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center "
                >
               
                  <dt className="order-last text-lg font-medium text-gray-500">
                     Orders in Shipment
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{shipmentOrders.length}</dd>
                  
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Messages
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{contaCtcount.count}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount (Shipment)
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{ShipmentAmount}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount (Done)
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{DoneAmount}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount (Cancel)
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{CencelAmount}</dd>
                </div>
                <div
                  className="flex flex-col rounded-lg border border-primary px-4 py-8 text-center"
                >
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Amount (Waiting)
          
                  </dt>
        
                  <dd className="text-4xl font-extrabold text-primary md:text-5xl">{WatingAmount}</dd>
                </div>
               
              </dl>
            </div>
          </div>
        </section>
        
     );
};
export default BasicInfo;

