import { BiHome, BiMenuAltRight } from 'react-icons/bi'
import { FaEdit } from "react-icons/fa";
import './adminSidebar.css'
import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMobileMenu = (e) => {
        e.stopPropagation(); // Prevent the click from triggering the close event
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Close the mobile menu if clicking outside of it
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        // Add click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);
    return (
        <div className='relative'>
            <aside className="aside fixed hidden md:flex">
                <Link to='/' className="nav__logo">
                    {/* <img src={Logo} alt="logo" /> */}
                    <div className='text-md md:text-2xl  font-bold bg-[#04052E] w-6 h-6 md:w-9 md:h-9 rounded-full flex justify-center items-center'>R</div>
                </Link>

                <nav className='nav'>
                    <div className='nav__menu'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <Link to='/admin-dashboard/create-blog' className="nav__link">
                                    <FaEdit />
                                </Link>
                            </li>


                        </ul>
                    </div>
                </nav>



                <div className="nav__footer">
                    <span className="copyright">
                        &copy; {year}
                    </span>
                </div>
            </aside>
            <div className="flex justify-start items-start md:hidden">
                <button className="p-4" onClick={toggleMobileMenu}>
                    <BiMenuAltRight size={24} className="text-[#a2e1f5]" />
                </button>
            </div>
            {isMobileMenuOpen && (
                <motion.div
                    ref={menuRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    // w-[450px]
                    className="lg:hidden bg-[#a2e1f5] text-[#140152] mt-7 py-5 fixed  md:w-[600] top-16 inset-0 bg-opacity-70 backdrop-blur-md z-10">
                    <ul className="flex flex-col items-center space-y-3 mt-4">
                        <li className="flex">
                            <a href='#home' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                                Home
                            </a>
                        </li>
                        <li className="flex">
                            <a href='#about' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                                About                            </a>
                        </li>
                        <li className="flex">
                            <a href='#services' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                                Services
                            </a>
                        </li>
                        <li className="flex">
                            <a href='#resume' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                                Resume
                            </a>
                        </li>
                        <li className="flex">
                            <a href='#portfolio' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-4xl leading-snug hover:underline">
                                Portfolio
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default AdminSidebar;