import Me from '../../assets/avatar-1.svg'
import './home.css'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <section className="home container" id="home">
            <div className="intro">
                <motion.div
                    className="progress-bar"
                    style={{ scaleX }}
                />
                <div
                // data-aos='zoom-in'
                // data-aos-delay='50'
                // data-aos-duration='1000'
                // data-aos-easing='ease-in-out'
                >
                    {/* <img src={Me} alt="me" className="home__img" /> */}
                    <h1 className="home__name"
                    // data-aos="fade-right"
                    // data-aos-offset="200"
                    // data-aos-easing="linear"
                    // data-aos-delay='40'
                    // data-aos-duration='800'
                    >Raiyan Kabir</h1>
                    <span className="home__education">A Frontend Developer</span>

                    <HeaderSocials />

                    <a href="#contact" className="btn">Hire Me !
                    </a>
                </div>


                <ScrollDown />
            </div>

            {/* <Shapes /> */}
        </section>
    );
};

export default Home;