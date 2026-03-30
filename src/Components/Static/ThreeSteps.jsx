import UserIcon from '../../assets/user.png'
import PackageIcon from '../../assets/package.png'
import RocketIcon from '../../assets/rocket.png'

const ThreeSteps = () => {
    return ( 
        <section className='my-10 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#6273820c] py-22'>

            <div className='flex flex-col gap-1 text-center mb-5'>
                <h2 className='font-bold text-5xl'>Get Started in 3 Steps</h2>
                <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='w-full flex justify-end pt-5 pr-5'>
                        <p className="badge badge-primary rounded-full">1</p>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <div className='w-10 bg-[#62738225] rounded-full p-2'>
                            <img src={UserIcon} alt="" />
                        </div>
                        <h2 className="card-title">Create Account</h2>
                        <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='w-full flex justify-end pt-5 pr-5'>
                        <p className="badge badge-primary rounded-full">1</p>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <div className='w-10 bg-[#62738225] rounded-full p-2'>
                            <img src={PackageIcon} alt="" />
                        </div>
                        <h2 className="card-title">Choose Products</h2>
                        <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='w-full flex justify-end pt-5 pr-5'>
                        <p className="badge badge-primary rounded-full">1</p>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <div className='w-10 bg-[#62738225] rounded-full p-2'>
                            <img src={RocketIcon} alt="" />
                        </div>
                        <h2 className="card-title">Start Creating</h2>
                        <p className='text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default ThreeSteps;