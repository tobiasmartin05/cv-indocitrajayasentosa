import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage4 from '../HomePage4/HomePage4';
import ServicePage from '../ServicePage/ServicePage';
// import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import AboutPage from '../AboutPage/AboutPage';
import ShopPage from '../ShopPage/index';
import ShopPage2 from '../ShopPage/index-2';
import ShopPage3 from '../ShopPage/index-3';
import ShopPage4 from '../ShopPage/index-4';
import ShopPage5 from '../ShopPage/index-5';
import ShopPage6 from '../ShopPage/index-6';

import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/index';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {
  const base = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
  return (
    <div className="App">
      <BrowserRouter basename={base}>
        <Routes>
          <Route path="/" element={<HomePage4 />} />
          <Route path="home" element={<HomePage4 />} />
          <Route path="service" element={<ServicePage />} />
          {/* <Route path="service-single/:slug" element={<ServiceSinglePage />} /> */}
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ShopPage />} />
          <Route path="product2" element={<ShopPage2 />} />
          <Route path="product3" element={<ShopPage3 />} />
          <Route path="product4" element={<ShopPage4 />} />
          <Route path="product5" element={<ShopPage5 />} />
          <Route path="product6" element={<ShopPage6 />} />
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='404' element={<ErrorPage />} />
          {/* <Route path='*' element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
