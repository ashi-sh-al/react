import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-1/10 w-full p-10 bg-cyan-500">
      <h1 className="text-4xl font-semibold">Silver Tools Enterprises</h1>
      <div className="flex gap-10 text-2xl">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
