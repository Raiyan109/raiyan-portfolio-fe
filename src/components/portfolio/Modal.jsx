import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Menu from './Menu';
import { MdOutlineDoubleArrow } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text, itemId }) => {
    const [project, setProject] = useState()
    const filteredMenu = Menu.find((item) => item.id === itemId)
    console.log(project);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://raiyan-portfolio-be.vercel.app/api/v1/bio/project/${itemId}`);
                console.log(res.data.data); // Check if the data is fetched properly
                setProject(res.data.data); // Store the fetched projects in state

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        })();
    }, [itemId]);

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal bg-gradient-to-r from-[#140152] to-[#02010a] h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-5 border-4 border-[#a2e1f5]"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >


                <button onClick={handleClose} className="bg-[#a2e1f5] text-[#140152] place-self-end p-2 mr-2 rounded-full">Close</button>
                <h1 className="text-4xl">{project?.title}</h1>

                <h2 className="text-2xl font-normal">{project?.description}</h2>

                <h2 className="text-2xl font-medium underline">Links</h2>
                <div className="flex items-center gap-3">
                    <a href={project?.feLive} target="_blank"
                        rel="noopener noreferrer" className="hover:underline transition-all">Live link</a>
                    {/* {filteredMenu.clientSide && <a href={filteredMenu.clientSide} target="_blank"
                        rel="noopener noreferrer" className="hover:underline transition-all">Client side</a>}
                    {filteredMenu.serverSide && <a href={filteredMenu.serverSide} target="_blank"
                        rel="noopener noreferrer" className="hover:underline transition-all">Server side</a>} */}
                </div>


                <h2 className="text-2xl font-medium underline">Features</h2>
                <ul>
                    {project?.features?.map((item) => (
                        <li key={item?._id} className="flex items-start gap-3 text-lg">
                            <span className="text-[#7750f7] mt-1"><MdOutlineDoubleArrow /></span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>


                <h2 className="text-2xl font-medium underline">Technologies used</h2>
                <ul>
                    {project?.technologies?.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg">
                            <span className="text-[#7750f7]"><MdOutlineDoubleArrow /></span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>



            </motion.div>
        </Backdrop>
    );
};


export default Modal;