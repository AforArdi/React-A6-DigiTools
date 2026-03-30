import { VscDebugBreakpointData } from "react-icons/vsc";

const WorkFlow = () => {
    return ( 
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-10 py-28 px-48 text-white flex flex-col items-center gap-6">
            <div className="text-center">
                <h2 className="font-bold text-[40px]">Ready to Transform Your Workflow?</h2>
                <p className="leading-6">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="btn btn-outline rounded-full">Explore Products</button>
                <button className="btn btn-outline rounded-full">View Pricing</button>
            </div>
            <p className="flex items-center gap-4">14-day free trial <VscDebugBreakpointData></VscDebugBreakpointData> No credit card required <VscDebugBreakpointData></VscDebugBreakpointData> Cancel anytime</p>
        </section>
     );
}
 
export default WorkFlow;