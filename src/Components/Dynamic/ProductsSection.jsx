import { use } from "react";
import ProductCard from "./ProductCard";

const ProductsSection = ({productPromise}) => {
    const productsData = use(productPromise);

    return ( 
        <section>
            <div className="space-y-4">
                <div className="text-center">
                    <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
                    <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                {/* Toggle Button */}
                <div className="tabs tabs-box justify-center bg-transparent">
                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked />
                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart ()" />
                </div>
            </div>
            
            <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
                {
                    productsData.map((product)=> {
                        return (
                            <ProductCard
                            key={product.id}
                            product={product}
                            ></ProductCard>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default ProductsSection;