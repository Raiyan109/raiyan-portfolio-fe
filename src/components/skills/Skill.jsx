import './skill.css'

const Skill = ({ skill }) => {
    return (
        <div className="skillCard">
            <div className="main-content">
                <img src={skill.image} alt="" className='w-28 h-28 object-contain' />
                <p className="heading">{skill.title}</p>
            </div>
        </div>
    )
}

export default Skill