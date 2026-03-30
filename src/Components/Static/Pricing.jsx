import { IoCheckmark } from "react-icons/io5";

const Pricing = () => {
    return ( 
        <section className="className='my-10 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22'">

            <div className='flex flex-col gap-1 text-center mb-5'>
                <h2 className='font-bold text-5xl'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime..</p>
            </div>

            {/* cards parent */}
            <div className="flex items-stretch justify-center gap-4">
                {/* starter */}
                <div className="card w-82 bg-base-100 shadow-sm">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className="text-[#627382]">Perfect for getting started</p>
                            <span className="text-xl font-bold">$0/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                        
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>

                {/* pro */}
                <div className="card w-82 bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Perfect for getting started</p>
                            <span className="text-xl font-bold">$29/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                        
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-soft btn-block rounded-full">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                {/* Enterprise */}
                <div className="card w-82 bg-base-100 shadow-sm">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="flex flex-col space-y-2">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className="text-[#627382]">For teams and businesses</p>
                        <span className="text-xl font-bold">$99/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark></IoCheckmark>
                                <span>High-resolution image generation</span>
                            </li>
                        
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Pricing;