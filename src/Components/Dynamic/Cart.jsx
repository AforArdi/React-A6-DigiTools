import { toast } from "react-toastify";
import CartCard from "./CartCard";
import { FaOpencart } from "react-icons/fa";

const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((sum, item)=> sum + item.price, 0)
    const handleRemoveBtn=(product)=>{
        const filteredItemArray = cart.filter(item=> item.id !== product.id);
        setCart(filteredItemArray);
        toast('Product Removed from Cart!')
    }

    const handlePayNowBtn=()=>{
        setCart([]);
        toast.success('Payment Successful!')
    }

    return ( 
        <section className="mx-w-7xl mx-auto shadow-md">
            <div>
                <h2 className="text-3xl font-bold text-center">Your Cart</h2>
            </div>

            {cart.length === 0 ? 
            <div className="flex flex-col items-center gap-2 p-20">
                <FaOpencart size={50}></FaOpencart>
                <p>Cart's Empty</p>
            </div>

            : <CartCard
            totalPrice={totalPrice}
            handleRemoveBtn={handleRemoveBtn}
            handlePayNowBtn={handlePayNowBtn}
            cart={cart}
            ></CartCard>}
        </section>
     );
}
 
export default Cart;