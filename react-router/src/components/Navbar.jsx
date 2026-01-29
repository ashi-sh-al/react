import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-blue-600">
      <h1 className="text-5xl">Silver Tools Enterprises</h1>
      <div className="flex gap-10 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
