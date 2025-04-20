import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("wtfchewy");
        alert("Copied to discord clipboard!");
    }

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center justify-center flex-grow w-full px-5 md:px-0 md:w-1/2 text-center mx-auto">
                <h1 className="font-bold text-6xl">Hire me!</h1>
                <p className="text-2xl mt-4">Ready to get started? Contact me on one of the methods listed below to begin the process. Please allow up to 24 hours for a response.</p>

                <div className="flex w-full flex-row items-center mt-8 bg-foreground p-4 rounded-lg drop-shadow-sm border-2 border-border gap-5">
                    <a href="mailto:wes@mars.rip" className="w-1/2 flex flex-col items-center drop-shadow-md rounded-lg py-7 border-2 border-border hover:border-primary transition-all duration-200">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-blue-500" />
                        <p className="text-lg">wes@mars.rip</p>
                    </a>

                    <button onClick={() => copyToClipboard()} className="hover:cursor-pointer w-1/2 flex flex-col items-center drop-shadow-md rounded-lg py-7 border-2 border-border hover:border-primary transition-all duration-200">
                        <FontAwesomeIcon icon={faDiscord} className="text-4xl text-indigo-500" />
                        <p className="text-lg">wtfchewy</p>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;