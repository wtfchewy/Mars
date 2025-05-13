import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { faEnvelope, faCheck, faPaperPlane, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("wtfchewy");
        setCopied(true);
        toast.success("Discord username copied to clipboard!");
        
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center justify-center flex-grow w-full px-5 md:px-0 md:w-3/4 lg:w-2/3 text-center mx-auto gap-10 py-16">
                <h1 className="font-bold text-4xl md:text-6xl text-copy">Ready to <span className="text-primary">transform</span> your online presence?</h1>
                
                <p className="text-lg max-w-2xl">Connect with me today to begin crafting your digital vision. I respond to all inquiries within 24 hours and can't wait to help bring your project to life!</p>

                <div className="flex w-full flex-col md:flex-row items-center mt-8 bg-foreground p-4 rounded-lg drop-shadow-sm border-2 border-border gap-5">
                    <a href="mailto:wes@mars.rip" className="bg-blue-500 text-white hover:scale-105 w-full md:w-1/2 flex flex-col items-center drop-shadow-md rounded-lg py-7 transition-all duration-200">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                        <p className="text-lg">wes@mars.rip</p>
                    </a>

                    <a href="https://github.com/wtfchewy" className="bg-copy text-white hover:scale-105 w-full md:w-1/2 flex flex-col items-center drop-shadow-md rounded-lg py-7 transition-all duration-200">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                        <p className="text-lg">wtfchewy</p>
                    </a>

                    <button onClick={() => copyToClipboard()} className="bg-indigo-500 text-white hover:scale-105 hover:cursor-pointer w-full md:w-1/2 flex flex-col items-center drop-shadow-md rounded-lg py-7 transition-all duration-200">
                        <FontAwesomeIcon icon={faDiscord} className="text-4xl" />
                        <p className="text-lg">wtfchewy</p>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;