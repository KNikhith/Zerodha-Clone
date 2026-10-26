import { Outlet } from "react-router-dom";

import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;