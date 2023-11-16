import { AiOutlineFire } from 'react-icons/ai'
import { BsCupHot, BsPeople } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'

const AboutBox = () => {
    return (
        <div className="about__boxes grid grid-cols-2 md:grid-cols-4">
            <div className="about__box">
                <div className="about__icon">
                    <AiOutlineFire />
                </div>

                <div>
                    <h3 className="about__title">10+</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BsCupHot />
                </div>

                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BsPeople />
                </div>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <div className="about__icon">
                    <BiBadgeCheck />
                </div>

                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Nominees winner</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;