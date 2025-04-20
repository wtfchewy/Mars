import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProject } from "../../services/porfolio";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Project = () => {
    const { project } = useParams();
    const [loading, setLoading] = useState(true);
    const [projectDetails, setProjectDetails] = useState({});

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProject(project);
                setProjectDetails(data);
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProject();
    }, [project]);

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

            <div className="flex flex-col flex-grow px-5 md:px-20 my-10">
                <div className="flex flex-col md:flex-row justify-start gap-10">
                    <img src={projectDetails.images[0]} alt={projectDetails.name} className="w-full md:w-1/2 h-auto rounded-lg border-2 border-border drop-shadow-md" />

                    <div className="flex flex-col w-full">
                        <h1 className="text-4xl font-bold">{projectDetails.name}</h1>
                        <div className="flex flex-row gap-2 mt-2">
                            {projectDetails.tags.map((tag, index) => (
                                <span key={index} className="text-xs font-medium bg-copy/10 text-copy rounded-full px-3 py-1 uppercase">{tag}</span>
                            ))}
                        </div>
                        <p className="text-lg text-copy-light mt-2">{projectDetails.description}</p>

                        <div className="flex flex-row gap-5 mt-5">
                            <a href={projectDetails.url} className="bg-primary text-white w-1/2 text-center font-semibold tracking-wide py-2 rounded-full hover:bg-primary/80 transition duration-200">View Project</a>

                            <NavLink to={`/portfolio/${projectDetails.category}`} className="bg-copy text-foreground w-1/2 text-center font-semibold tracking-wide py-2 rounded-full hover:bg-copy/90 transition duration-200">Back to Portfolio</NavLink>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Project;