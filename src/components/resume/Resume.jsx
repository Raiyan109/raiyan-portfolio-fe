import Card from "./Card";
import Data from "./Data";
import './resume.css'
const Resume = () => {
    return (
        <section className="resume container section" id="resume"
            data-aos='zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
        >
            <h2 className="section__title">Education & Experience</h2>

            <div className="resume__container grid">
                <div className="timeline skills-grid">
                    {Data.map((val, id) => {
                        if (val.category === 'education') {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>

                <div className="timeline skills-grid">
                    {Data.map((val, index) => {
                        if (val.category === 'experience') {
                            return (
                                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

export default Resume;