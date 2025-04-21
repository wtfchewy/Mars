import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getLatestProjects } from "../../services/porfolio";

const Home = () => {
    const [latestProjects, setLatestProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getLatestProjects();
                setLatestProjects(response);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col flex-grow px-5 md:px-20">

                <div className="md:-mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-screen gap-4 border-b border-border">
                    <div className="flex flex-col w-full md:w-1/2 gap-5">
                        <h1 className="text-copy font-black text-7xl">Hey, I'm <span className="text-primary">Wes</span>.</h1>

                        <p className="text-copy text-xl">I craft modern, captivating websites and software that transform your vision into a digital reality.</p>

                        <div className="flex flex-row gap-4">
                            <a href="/contact" className="bg-primary font-semibold text-primary-content px-9 py-3 rounded-full hover:bg-primary/80 duration-200 transition ease-in-out">
                                Hire Me
                            </a>
                            <a href="/portfolio" className="bg-copy font-semibold text-foreground px-9 py-3 rounded-full hover:bg-copy/90 duration-200 transition ease-in-out">
                                View Portfolio
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full md:w-4/7 justify-center items-center relative hover:scale-105 duration-200 transition ease-in-out">
                        <img src="ccc.png" alt="alt" className="drop-shadow-lg rounded-md border border-border" />
                        <a href="https://coolcrafter.club/" className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full rounded-md hover:bg-copy/10 duration-200 transition ease-in-out">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-white bg-copy/70 p-5 rounded-full" />
                        </a>
                    </div>
                </div>

                <div className="w-full min-h-screen py-20 flex flex-col items-center justify-center">
                    <h2 className="text-copy-lighter font-medium text-lg">MOST RECENT</h2>
                    <h1 className="font-bold text-6xl">My Latest Projects</h1>

                    <div className="flex flex-col md:flex-row gap-5 mt-10 w-full">
                        {loading ? (
                            <>
                                <div className="animate-pulse bg-copy/10 w-1/3 h-60 rounded-md border-2 border-border drop-shadow-sm" />
                                <div className="animate-pulse bg-copy/10 w-1/3 h-60 rounded-md border-2 border-border drop-shadow-sm" />
                                <div className="animate-pulse bg-copy/10 w-1/3 h-60 rounded-md border-2 border-border drop-shadow-sm" />
                            </>
                        ) : (
                            latestProjects.map((project) => (
                                <a key={project.id} href={`/projects/${project.id}`} className="hover:scale-105 duration-200 transition ease-in-out flex flex-col gap-3 items-center">
                                    <div className="w-full flex justify-center items-center overflow-hidden">
                                        <img src={project.images[0]} alt={project.name} className="h-full object-cover rounded-md border-2 border-border drop-shadow-sm" />
                                    </div>

                                    <h1 className="text-2xl font-semibold">{project.name}</h1>
                                    <div className="-mt-2 flex flex-row gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="text-xs font-medium bg-copy/10 text-copy rounded-full px-3 py-1 uppercase">{tag}</span>
                                        ))}
                                    </div>
                                </a>
                            ))
                        )}
                    </div>

                    <NavLink to="/portfolio" className="mt-20 bg-primary font-semibold text-primary-content px-20 py-3 rounded-full hover:bg-primary/80 duration-200 transition ease-in-out">
                        My Portfolio
                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </NavLink>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Home;