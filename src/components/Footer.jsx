import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-foreground border-t border-border py-5 px-5 md:px-20 flex justify-between items-center">
            <div className="text-sm text-copy-light">
                © 2025 Wes. All rights reserved.
            </div>
            <div className="flex gap-5">
                <NavLink to="/" className="text-copy-lighter hover:text-copy duration-200 transition ease-in-out">
                    Home
                </NavLink>
                <NavLink to="/portfolio" className="text-copy-lighter hover:text-copy duration-200 transition ease-in-out">
                    Portfolio
                </NavLink>
                <NavLink to="/about" className="text-copy-lighter hover:text-copy duration-200 transition ease-in-out">
                    About
                </NavLink>
                <NavLink to="/faq" className="text-copy-lighter hover:text-copy duration-200 transition ease-in-out">
                    FAQ
                </NavLink>
            </div>
        </footer>
    );
}

export default Footer;