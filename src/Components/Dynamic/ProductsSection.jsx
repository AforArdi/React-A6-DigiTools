import { use, useState } from "react";
import ProductCard from "./ProductCard";
import AllProducts from "./AllProducts";
import Cart from "./Cart";

const ProductsSection = ({productPromise, cart, setCart}) => {
    const productsData = use(productPromise);
    const [activeToggleBtn, setActiveToggleBtn] = useState('products');

    return ( 
        <section>
            {/* fixed */}
            <div className="space-y-6">
                <div className="text-center  space-y-6">
                    <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
                    <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                {/* Toggle Button */}
                <div className="tabs tabs-box justify-center bg-transparent">
                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked onClick={()=>{setActiveToggleBtn('products')}} />
                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${cart.length})`} onClick={()=>{setActiveToggleBtn('cart')}} />
                </div>
            </div>

            {activeToggleBtn === 'products' ? <AllProducts 
            productsData={productsData}
            cart={cart}
            setCart={setCart}
            ></AllProducts> : <Cart
            cart={cart}
            setCart={setCart}
            ></Cart>}
        </section>
     );
}
 
export default ProductsSection;