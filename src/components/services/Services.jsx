import './services.css'
import img1 from '../../assets/service-1.svg'
import img2 from '../../assets/service-2.svg'
import img3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: img1,
        title: "Frontend Development",
        description:
            "With my extensive experience in Frontend Development I have been able to build up a wide range of skills that will help you grow your business.",
    },
    {
        id: 2,
        image: img2,
        title: "Full Stack Development",
        description:
            "I'll surely provide you a quality and on-time services. I am more than happy to have a brief discussion about your problem in a relaxed and user-friendly environment. I worked for so many clients with Positive feedback's and have good relations with them.",
    },
    {
        id: 3,
        image: img3,
        title: "Translation",
        description:
            " Native Bangla speaker with years of training in Professional Arabic Translation, eager to help you. Also have a Dawrah Hadith Degree and experience in the translation field.",
    },
];


const Services = () => {
    return (
        <section className="services container section" id='services'
            data-aos='zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
        >
            <h2 className="section__title">Services</h2>


            <div className="services__container grid cursor-pointer">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__desc">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Services;