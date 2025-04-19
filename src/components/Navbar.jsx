import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="bg-foreground border-b border-border py-5 px-5 md:px-20 flex justify-between items-center">
            <NavLink to="/" className="w-26">
                <img src="logo.svg" alt="alt" />
            </NavLink>

            <div className="flex flex-row items-center gap-5">
                <NavLink to="/" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    Home
                </NavLink>
                <NavLink to="/portfolio" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    Portfolio
                    {/* <FontAwesomeIcon icon={faChevronDown} className={`ml-1 ${isHovered && 'rotate-180'} transition duration-300 ease-in-out`} /> */}
                </NavLink>

                {/* {isHovered && (
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="absolute bg-foreground border border-border rounded-lg shadow-lg p-4 mt-26 ml-12">
                        <NavLink to="/portfolio" className="block hover:text-primary duration-200 transition ease-in-out">
                            Portfolio
                        </NavLink>
                        <NavLink to="/projects" className="block hover:text-primary duration-200 transition ease-in-out">
                            Projects
                        </NavLink>
                    </div>
                )} */}

                <NavLink to="/about" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    About
                </NavLink>
                <NavLink to="/faq" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    FAQ
                </NavLink>
            </div>

            <NavLink to={'/contact'} className="bg-primary font-semibold text-primary-content px-8 py-2 rounded-full hover:bg-primary/80 duration-200 transition ease-in-out">
                Hire Me
            </NavLink>
        </nav>
    );
}

export default Navbar;