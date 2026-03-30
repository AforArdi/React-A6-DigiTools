import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return ( 
        <section>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav className="w-75">
                    <h6 className="font-extrabold text-3xl">DigiTools</h6>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="flex items-center gap-2">
                        <a href="https://www.instagram.com/0mohammadardi0" target="_blank" className="link link-hover bg-white w-6 h-6 p-1 rounded-full flex items-center justify-center">
                            <AiFillInstagram color="black"></AiFillInstagram>
                        </a>
                        <a href="https://www.facebook.com/miftahulislamardi" target="_blank" className="link link-hover bg-white w-6 h-6 p-1 rounded-full flex items-center justify-center">
                            <FaFacebook color="black"></FaFacebook>
                        </a>
                        <a href="https://x.com/AforArdi" target="_blank" className="link link-hover bg-white w-6 h-6 p-1 rounded-full flex items-center justify-center">
                            <RiTwitterXFill color="black"></RiTwitterXFill>
                        </a>
                    </div>
                </nav>
            </footer>

            {/* this two div below, I took help */}
            <div className="border-t border-gray-700/50 w-full"></div>

            <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside className="items-center grid-flow-col">
                    <p className="flex items-center gap-1"><PiCopyright></PiCopyright> 2026 DigiTools. All rights reserved.</p>
                </aside>
                <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookies</a>
                </nav>
            </div>
        </section>
     );
}
 
export default Footer;