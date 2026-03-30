import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({cart}) => {
    return ( 
        <section className=" sticky top-0 z-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost font-extrabold text-3xl text-[#4F39F6]">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-1">
                    <a className="btn btn-ghost">
                        <MdOutlineShoppingCart size={25}></MdOutlineShoppingCart>
                        {cart.length > 0 && <div className="badge badge-sm badge-info rounded-full">{cart.length}</div>}
                    </a>
                    <a className="btn btn-ghost">Login</a>
                    <a className="btn btn-primary rounded-4xl">Get Started</a>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;