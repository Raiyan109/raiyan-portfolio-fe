
const Card = ({ icon, title, year, desc }) => {
    return (
        <div className="timeline__item">
            <p className="absolute left-[-0.4375rem] top-0 text-[1.5rem] text-[#A3E7FC] py-[0.4375rem] px-0">{icon}</p>
            <span className="timeline__date">{year}</span>
            <h3 className="timeline__title">{title}</h3>
            <p className="timeline__text">{desc}</p>
        </div>
    );
};

export default Card;