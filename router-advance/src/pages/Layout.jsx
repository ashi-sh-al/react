import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
