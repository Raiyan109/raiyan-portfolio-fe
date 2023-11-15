import { BiHome, BiUser, BiBriefcase, BiLayer } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa'
import { MdEditNote } from 'react-icons/md'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import './sidebar.css'

const Sidebar = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                {/* <img src={Logo} alt="logo" /> */}
                <div className='text-md md:text-2xl  font-bold bg-orange-400 w-6 h-6 md:w-9 md:h-9 rounded-full flex justify-center items-center'>R</div>
            </a>

            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href="#home" className="nav__link">
                                <BiHome />
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" className="nav__link">
                                <BiUser />
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#services" className="nav__link">
                                <BiBriefcase />
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#resume" className="nav__link">
                                <FaUserGraduate />
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#portfolio" className="nav__link">
                                <BiLayer />
                            </a>
                        </li>

                        {/* <li className='nav__item'>
                            <a href="#blog" className="nav__link">
                                <MdEditNote />
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#contact" className="nav__link">
                                <HiOutlineChatBubbleBottomCenterText />
                            </a>
                        </li> */}

                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                    &copy; {year}
                </span>
            </div>
        </aside>
    );
};

export default Sidebar;