import { CiPlay1 } from 'react-icons/ci';
import banner from '../../assets/Banner.png'
import { FaCircleDot } from 'react-icons/fa6';

const Hero = () => {
    return ( 
        <section>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="w-150">
                        <div className="badge badge-soft badge-primary"><FaCircleDot></FaCircleDot> New: AI-Powered Tools Available</div>
                        <h1 className="text-5xl font-bold leading-15">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                        </p>
                        <div className='flex items-center gap-3'>
                            <button className="btn btn-primary rounded-3xl">Get Started</button>
                            <button className='btn btn-outline rounded-3xl'>
                                <CiPlay1></CiPlay1> Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;