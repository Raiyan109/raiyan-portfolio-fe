import Me from '../../assets/avatar-1.svg'
import './home.css'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="me" className="home__img" />
                <h1 className="home__name">Raiyan Kabir</h1>
                <span className="home__education">I am a Frontend Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me !

                </a>


                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
};

export default Home;