const Stat = () => {
    return ( 
        <section className="flex justify-center my-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="stats flex items-center gap-20 text-white py-3">
                <div className="stat place-items-center">
                    <div className="stat-value">50K+</div>
                    <div className="stat-title text-white text-[16px]">Active Users</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value">200+</div>
                    <div className="stat-title text-white text-[16px]">Premium Tools</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value">4.9</div>
                    <div className="stat-title text-white text-[16px]">Rating</div>
                </div>
            </div>
        </section>
     );
}
 
export default Stat;