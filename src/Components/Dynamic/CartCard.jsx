const CartCard = ({cart, totalPrice, handleRemoveBtn, handlePayNowBtn}) => {
    return ( 
        <section>
            <div className="p-4 flex flex-col gap-3">
                {
                    cart.map(product=>{
                        return (
                            <div key={product.id} 
                            className="flex justify-between items-center bg-[#6273821e] p-4 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 h-10 w-10 rounded-full">
                                        <img src={product.icon} alt={product.name} />
                                    </div>
                                    <div>
                                        <h2 className="card-title font-semibold text-[20px]">{product.name}</h2>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                                <button onClick={()=>{handleRemoveBtn(product)}} className="btn btn-primary rounded-full">Remove</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-right">Total: ${totalPrice}</h2>
                <button onClick={handlePayNowBtn} className="btn btn-primary rounded-full">Pay Now</button>
            </div>
        </section>
     );
}
 
export default CartCard;