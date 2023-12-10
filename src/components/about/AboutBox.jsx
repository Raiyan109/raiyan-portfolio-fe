import { AiOutlineFire } from 'react-icons/ai'
import { BsCupHot, BsPeople } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import CountUp from 'react-countup';

const AboutBox = () => {
    return (
        <div className="about__boxes grid grid-cols-2 md:grid-cols-4"
            data-aos='zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
        >
            <div className="about__box">
                <div className="about__icon">
                    <AiOutlineFire />
                </div>

                <div>
                    <h3 className="about__title">
                        <CountUp
                            end={10}
                            delay={0.95}
                            duration={4}
                        />+</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BsCupHot />
                </div>

                <div>
                    <h3 className="about__title"><CountUp
                        end={20}
                        delay={0.95}
                        duration={4}
                    /></h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BsPeople />
                </div>

                <div>
                    <h3 className="about__title">
                        <CountUp
                            end={5}
                            delay={0.95}
                            duration={4}
                        />
                    </h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BiBadgeCheck />
                </div>

                <div>
                    <h3 className="about__title"><CountUp
                        end={3}
                        delay={0.95}
                        duration={2}
                    /></h3>
                    <span className="about__subtitle">Months of experience</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;