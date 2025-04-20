import { useParams } from "react-router-dom";
import { getProjects, getProjectsByCategory } from "../../services/porfolio";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Portfolio = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        const fetchProjectsByCategory = async () => {
            try {
                const data = await getProjectsByCategory(category);
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects by category:", error);
            } finally {
                setLoading(false);
            }
        }

        if (category) {
            fetchProjectsByCategory();
        } else {
            fetchProjects();
        }
    }, []);

    if (loading) {
        return (
            <div className="w-full min-h-screen flex flex-col">
                <Navbar />

                <div className="flex flex-col items-center justify-center flex-grow">
                    <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-primary border-t-transparent"></div>
                </div>

                <Footer />
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col flex-grow px-5 md:px-20">
                <div className="mt-10 flex flex-col w-full border-b border-border pb-3">
                    <h1 className="text-copy font-black text-5xl">Portfolio</h1>
                    {category ? (
                        <h2 className="text-copy-lighter text-lg">Explore are all of my <span className="text-primary font-semibold">{category}</span> projects.</h2>
                    ) : (
                        <h2 className="text-copy-lighter text-lg">Explore are all of my projects.</h2>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
                    {projects.map((project) => (
                        <a key={project.id} href={`/projects/${project.id}`} className="hover:scale-105 duration-200 transition ease-in-out flex flex-col gap-3 items-center">
                            <div className="">
                                <img src={project.images[0]} alt={project.name} className="w-full rounded-md border-2 border-border drop-shadow-sm" />
                            </div>

                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <div className="-mt-2 flex flex-row gap-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="text-xs font-medium bg-copy/10 text-copy rounded-full px-3 py-1 uppercase">{tag}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Portfolio;

