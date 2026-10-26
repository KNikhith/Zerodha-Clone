import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../components/common/Loader";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../landing_page/home/HomePage"));
const AboutPage = lazy(() => import("../landing_page/about/AboutPage"));
const ProductPage = lazy(() => import("../landing_page/products/ProductPage"));
const PricingPage = lazy(() => import("../landing_page/pricing/PricingPage"));
const SupportPage = lazy(() => import("../landing_page/support/SupportPage"));
const Signup = lazy(() => import("../landing_page/signup/Signup"));
const Login = lazy(() => import("../landing_page/signup/Login"));
const NotFound = lazy(() => import("../landing_page/NotFound"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;