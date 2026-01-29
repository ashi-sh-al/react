import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center gap-20 p-10">
        <Link to="men" className="text-xl font-medium">Men</Link>
        <Link to="women" className="text-xl font-medium">Women</Link>
        <Link to="kids" className="text-xl font-medium">Kids</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
