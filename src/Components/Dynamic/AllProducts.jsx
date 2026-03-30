import ProductCard from "./ProductCard";

const AllProducts = ({productsData}) => {
    return ( 
        <section>
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
 
export default AllProducts;