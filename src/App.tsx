import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { ProductDetails } from './pages/ProductDetails';
import { CompanyStore } from './pages/CompanyStore';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CreateCompany } from './pages/CreateCompany';
import { SellerDashboard } from './pages/seller/SellerDashboard';
import { MyProducts } from './pages/seller/MyProducts';
import { AddProduct } from './pages/seller/AddProduct';
import { EditProduct } from './pages/seller/EditProduct';
import { BusinessProfile } from './pages/seller/BusinessProfile';
import { Cart } from './pages/customer/Cart';
import { Orders } from './pages/customer/Orders';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CustomCursor } from './components/common/CustomCursor';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        {/* Main Website Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/store/:slug" element={<CompanyStore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-company" element={<CreateCompany />} />

        {/* Customer Experience */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />

        {/* Seller Hub */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<MyProducts />} />
        <Route path="/seller/products/new" element={<AddProduct />} />
        <Route path="/seller/products/edit/:id" element={<EditProduct />} />
        <Route path="/seller/profile" element={<BusinessProfile />} />

        {/* Admin Dashboard UI */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
