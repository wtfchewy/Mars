import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../services/porfolio";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <nav className="bg-foreground border-b border-border py-6 px-5 md:px-20 flex justify-between items-center">
            <NavLink to="/" className="w-26">
                <img src={logo} alt="alt" />
            </NavLink>

            <div className="flex flex-row items-center gap-5 md:gap-10">
                <NavLink to="/" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    Home
                </NavLink>
                <NavLink to="/portfolio" onMouseEnter={() => setIsHovered(true)} className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    Portfolio
                    <FontAwesomeIcon icon={faChevronDown} className={`ml-1 ${isHovered && 'rotate-180'} transition duration-300 ease-in-out`} />
                </NavLink>

                {isHovered && (
                    <div onMouseLeave={() => setIsHovered(false)} className="w-1/6 absolute bg-foreground border border-border rounded-lg shadow-lg p-2 top-14 ml-12">
                        <NavLink to={`/portfolio`} className="block px-2 rounded-md py-1 font-medium hover:text-primary hover:bg-primary-content duration-200 transition ease-in-out">
                            All
                        </NavLink>
                        {categories.map((category, index) => (
                            <NavLink to={`/portfolio/${category}`} key={index} className="block px-2 rounded-md py-1 font-medium hover:text-primary hover:bg-primary-content duration-200 transition ease-in-out">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </NavLink>
                        ))}
                    </div>
                )}

                {/* <NavLink to="/about" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    About
                </NavLink>
                <NavLink to="/faq" className="py-1 font-medium hover:text-primary duration-200 transition ease-in-out">
                    FAQ
                </NavLink> */}
            </div>

            <NavLink to={'/contact'} className="bg-primary font-semibold text-primary-content px-8 py-2 rounded-full hover:bg-primary/80 duration-200 transition ease-in-out">
                Hire Me
            </NavLink>
        </nav>
    );
}

export default Navbar;