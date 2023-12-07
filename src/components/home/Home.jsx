import Me from '../../assets/avatar-1.svg'
import './home.css'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro"

            >
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