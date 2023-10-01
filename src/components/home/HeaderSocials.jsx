import './home.css'
import { BiLogoLinkedin, BiLogoFacebook, BiLogoGithub } from 'react-icons/bi'


const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/raiyankabirkhan/" className="home__social-link" target="_blank" rel="noreferrer">
                <BiLogoLinkedin />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100008869806599" className="home__social-link" target="_blank" rel="noreferrer">
                <BiLogoFacebook />
            </a>

            {/* <a href="" className="home__social-link" target="_blank" rel="noreferrer">
                <BiLogoStackOverflow />
            </a> */}

            <a href="https://github.com/Raiyan109" className="home__social-link" target="_blank" rel="noreferrer">
                <BiLogoGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;