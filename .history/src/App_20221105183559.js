/** @format */

import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import MSG from "./components/vendorPanel/components/pages/Message/Message";
import "react-toastify/dist/ReactToastify.css";
import UserKundli from "./components/pages/UserKundli/UserKundli";
import Discount from "./components/pages/discount/Discount";
import Chat from "./components/pages/reactChat/Chat";
import Horoscope from "./components/pages/horoScope/Horoscope";
import Specification from "./components/pages/SpecificationPage/Specification";
import VendorLogin from "./components/vendorPanel/components/forms/VendorLogin";
import VendorDashboard from "./components/vendorPanel/components/pages/VendorDashboard";
import Fedd from "./components/pages/FeedBack/Fedd";
import Astrologers from "./components/vendorPanel/components/pages/Astrologer/Astrologers";
import Users from "./components/vendorPanel/components/pages/Users/Users";
import Kundli from "./components/vendorPanel/components/pages/Kundli/Kundli";
import AdminHoro from "./components/vendorPanel/components/pages/Horoscope/Horoscope";
import Forgot from "./components/vendorPanel/components/forms/Forgot";
import ResetPassword from "./components/vendorPanel/components/forms/ResetPassword";
import Changepassword from "./components/vendorPanel/components/forms/Changepassword";
import TimeSlots from "./components/pages/TimeSlots/TimeSlots";
import Documents from "./components/pages/Documents/Documents";
import Banner from "./components/pages/Banner/Banner";
import Notify from "./components/pages/Notifications/Notify";
import Booking from "./components/vendorPanel/components/pages/Booking/Booking";
import ProductDetail from "./components/pages/FeedBack/ProductDetail";
import Product from "./components/vendorPanel/components/pages/Products/Product";
import ProductDet from "./components/vendorPanel/components/pages/Products/ProductDet";
import Category from "./components/vendorPanel/components/pages/Category/Category";
import Order from "./components/vendorPanel/components/pages/Orders/Order";
import Ban from "./components/vendorPanel/components/pages/Ban/Ban";
import Sub from "./components/vendorPanel/components/pages/SubCategory/Sub";
import Coupon from "./components/vendorPanel/components/pages/Coupon/Coupon";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userkundli" element={<UserKundli />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/specification" element={<Specification />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="feedback" element={<Fedd />} />
        <Route path="/time" element={<TimeSlots />} />
        <Route path="/document" element={<Documents />} />
        {/* <Route path="/ban" element={<Banner />} /> */}
        <Route path="/not" element={<Notify />} />
        <Route path="/viewProduct" element={<ProductDetail />} />
        {/* Admin Panel */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dis" element={<Coupon />} />
        <Route path="/subCategory" element={<Sub />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ban" element={<Ban />} />
        <Route path="/proDet" element={<ProductDet />} />
        <Route path="/otp" element={<Forgot />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/msg" element={<MSG />} />
        <Route path="/resetPass" element={<ResetPassword />} />
        <Route path="/resetPassword" element={<Changepassword />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/astro" element={<Astrologers />} />
        <Route path="/users" element={<Users />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/horo" element={<AdminHoro />} />
      </Routes>
    </>
  );
}

export default App;
