import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

const ProductCard = ({product, cart, setCart}) => {
    const [isBought, setIsBought] = useState(false);
    const handleBuyBtn=()=>{
        // setIsBought(prev=> !prev);
        setIsBought(true);
        const foundProduct = cart.find(item=> item.id === product.id);
        if(foundProduct){
            toast.error('Product is Already in Cart');
            return
        }
        setCart([
            ...cart,
            product
        ])
        toast.success('Product Added to Cart')
    }

    // showing different badge based on it's type
    // took help
    const badgeColors = {
    "Best Seller": "badge-warning",
    "Popular": "badge-primary", // or badge-secondary depending on your DaisyUI theme
    "New": "badge-success"
    };

    return ( 
        <section>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* simple one */}
                    {/* <span className="badge badge-xs badge-warning">{product.tag}</span> */}

                    {/* trying */}
                    <span className={`badge badge-xs ${badgeColors[product.tag]}`}>{product.tag}</span>
                    <div className="flex flex-col space-y-2">
                        <div className="bg-white p-2 h-15 w-15 rounded-full">
                            <img src={product.icon} alt={product.name} />
                        </div>
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <p className="text-[#627382]">{product.description}</p>
                        <span className="text-xl font-bold">${product.price}/mo</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            product.features.map((feature, i)=>(
                                <li key={i} className="flex items-center gap-2">
                                    <IoCheckmark></IoCheckmark>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mt-6">
                    <button onClick={handleBuyBtn} className={`btn btn-primary btn-block rounded-full ${isBought && 'bg-green-800 text-white'}`}>
                        {isBought ? 'Added to Cart' : 'Buy Now'}
                    </button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProductCard;