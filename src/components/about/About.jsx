import './about.css'
import aboutImg from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';


const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">
                About Me
            </h2>

            <div className="about__container grid">
                <img src={aboutImg} alt="" className="about__img" data-aos='zoom-in'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out' />

                <div className="about__data grid"
                    data-aos='zoom-in'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'
                >
                    <div className="about__info">
                        <p className="about_desc">I am Raiyan Kabir, a frontend developer. I live in coding. And I believe in Quality. I enjoy learning new technologies and listening to web development podcasts in Bangla. I am open to hearing new perspectives, reach out if you want to be a mate in creating shining real-world web apps!
                        </p>
                        <a href="https://drive.google.com/file/d/1t5I2y-UPJUI3gOdkcSHiVIANWcdcfmze/view?usp=sharing" rel='noopener noreferrer' target='_blank' className="btn">Download Resume</a>
                    </div>

                    <div className="about__skills skills-grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Translation</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;