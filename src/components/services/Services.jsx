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
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
        id: 2,
        image: img2,
        title: "Full Stack Development",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
        id: 3,
        image: img3,
        title: "Translation",
        description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
];


const Services = () => {
    return (
        <section className="services container section" id='services'>
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