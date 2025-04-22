import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-foreground border-t border-border py-5 px-5 md:px-20 flex justify-between items-center">
            <div className="text-sm font-light">
                © 2025 Wes. All rights reserved.
            </div>
            <div className="flex gap-5 text-sm">
                <NavLink to="/" className="hover:cursor-pointer hover:text-copy/70 transition-colors duration-200 ease-in-out">
                    Home
                </NavLink>
                <NavLink to="/portfolio" className="hover:cursor-pointer hover:text-copy/70 transition-colors duration-200 ease-in-out">
                    Portfolio
                </NavLink>
                <NavLink to="/contact" className="hover:cursor-pointer hover:text-copy/70 transition-colors duration-200 ease-in-out">
                    Contact
                </NavLink>
            </div>
        </footer>
    );
}

export default Footer;