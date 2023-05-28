import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import AboutUs from './Components/AboutUs';
import 'react-toastify/dist/ReactToastify.css';
import QNA from './Components/QNA';
import ProductDetails from './Components/ProductDetails';
import TramsAndCondition from './Components/TramsAndCondition';
import Home from './Pages/Home';
import Footer from './Shired/Footer';
import Navbar from './Shired/Navbar';
import "./css/style.css";
import Deshboard from './Deshboard/Deshboard';
import BasicInfo from './Deshboard/Components/BasicInfo';
import AllProducts from './Deshboard/Components/AllProducts';
import AddProduct from './Deshboard/Components/AddProduct';
import CreateCategories from './Deshboard/Components/CreateCategories';
import ShopingCart from './Components/ShopingCart';
import Checkout from './Components/Checkout';
import Notfound from './Components/Notfound';
import UpdateProduct from './Deshboard/Components/UpdateProduct';
import UpdateCategory from './Deshboard/Components/UpdateCategory';
import Coupon from '../src/Components/Coupon';
import UpdateCoupon from './Deshboard/Components/UpdateCoupon';
import RequireAuth from './Authentication/RequireAuth';
import auth from './firebase.init';
import Orders from './Deshboard/Components/Orders';
import OrderPDF from './Deshboard/Components/OrderPDF';
import UserSlefOrderInfo from './Deshboard/Components/UserSelfInfo/UserSlefOrderInfo';
import { ToastContainer } from 'react-toastify';
import Users from './Deshboard/Components/Users';
import RequireAdmin from './Authentication/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseAdmin from './Deshboard/Hooks/UseAdmin';
import ForgetPassword from './Authentication/ForgetPassword';
import ContactDetailsInformation from './Deshboard/Components/ContactDetailsInformation';
import RequireWorker from './Authentication/RequireWorker';
import OrderStatusUpdate from './Deshboard/Components/OrderStatusUpdate';
import UserContactinfo from './Deshboard/Components/UserContactinfo';
import SingleItemOrder from './Components/SingleItemOrder';
import BottomNavbar from './Components/BottomNavbar';
import NavbarForMabail from './Shired/NavbarForMabail';
import { useEffect } from 'react';
import Ourteam from './Components/Ourteam';

import ContactUs from './Pages/ContactUs';
function App() {
    const [user]=useAuthState(auth);
    const [admin]=UseAdmin(user);
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
        return null;
      }
  return (
   <div className='md:px-6 bg-gray-100 scrollbar-container'>
   <Navbar/><NavbarForMabail/>
    <ScrollToTop/>
<Routes> 
    <Route path='/login' element={<Login/>}/>
    <Route path='/ourteam' element={<Ourteam/>}/>
  <Route path='/forget-password' element={<ForgetPassword/>}/>
  <Route path='update-product/:id' element={
 
    <RequireAuth>
    <RequireWorker><UpdateProduct/></RequireWorker></RequireAuth>
    
    
    }/>
  <Route path='readmore/:id' element={<RequireAuth>
      <RequireWorker><ContactDetailsInformation/></RequireWorker></RequireAuth>}/>
  <Route path='itemorderdelete/:id' element={<RequireAuth>
      <RequireWorker><OrderStatusUpdate/></RequireWorker></RequireAuth>}/>
  <Route path='itemorder/:id' element={<RequireAuth>
      <OrderPDF/></RequireAuth>}/>

  <Route path='updatecatagory/:id' element={<RequireAuth><RequireAdmin><UpdateCategory/></RequireAdmin></RequireAuth>}/>
  <Route path='/updatecopen/:id' element={<RequireAuth><RequireAdmin><UpdateCoupon/></RequireAdmin></RequireAuth>}/>
  <Route path='/deshboard' element={
  <RequireAuth>
 <Deshboard/>
  </RequireAuth>
  }>
  {admin? <Route index  element={
  <RequireAuth>
<RequireAdmin> <BasicInfo/></RequireAdmin>
   </RequireAuth>
  }/>: <Route index element={<RequireAuth><UserSlefOrderInfo/></RequireAuth>}/>}
          <Route path='basic-info' element={<RequireAuth><RequireAdmin><BasicInfo/></RequireAdmin></RequireAuth>}/>
          
          <Route path='users' element={<RequireAuth>{<RequireAdmin><Users/></RequireAdmin>}</RequireAuth>}/>
          <Route path='products' element={<RequireAuth>
                <RequireWorker><AllProducts/></RequireWorker>
          </RequireAuth>}/>
          <Route path='add-product' element={<RequireAuth>
              <RequireWorker><AddProduct/></RequireWorker>
          </RequireAuth>}/>
          <Route path='catagory' element={<RequireWorker><CreateCategories/></RequireWorker>}/>
          <Route path='copne' element={<RequireAuth>
         <RequireAdmin>  <Coupon/></RequireAdmin>
          </RequireAuth>}/>
          <Route path='orders' element={<RequireAuth>
               <RequireWorker> <Orders/></RequireWorker>
          </RequireAuth>}/>
          <Route path='contact' element={<RequireAuth>
               <RequireWorker> <UserContactinfo/></RequireWorker>
          </RequireAuth>}/>
          
  </Route>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/product-details' element={<ProductDetails/>}/>
  <Route path='/view-cart' element={
  <RequireAuth>
  <ShopingCart/>
  </RequireAuth>}/>

  <Route path='/checkout' element={
    <RequireAuth>
<Checkout/>
    </RequireAuth>
  }/>
 
          
  <Route path='/single/:id' element={<ProductDetails/>}/>
  <Route path='/single-order/:id' element={<RequireAuth><SingleItemOrder/></RequireAuth>}/>
  <Route path='/' element={<Home/>}/>
          <Route path='/trams-and-condition' element={<TramsAndCondition/>}/>
          <Route path='/qna' element={<QNA/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
<Route path='*' element={<Notfound/>}/>

</Routes>
<Footer/>
<BottomNavbar/>
<ToastContainer />

   </div>
  );
}
export default App;
