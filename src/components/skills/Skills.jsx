import axios from "axios"
import { useEffect, useState } from "react"
import Skill from "./Skill"
import './skills.css'


const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://raiyan-portfolio-be.vercel.app/api/v1/bio/skill')
            // console.log(res.data.data);
            setSkills(res.data.data)
        })()
    }, [])

    return (
        <div id='skills' className='py-1'>
            <div className="card container section"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h1 className='text-5xl lg:text-[90px] mb-8'>Skills</h1>
                <div className="flex justify-center items-center">
                    <div className="skillGrid">
                        {
                            skills.length > 0 ? (
                                skills.map((skill) => (
                                    <Skill key={skill._id} skill={skill} />
                                ))
                            ) :
                                <div className='flex justify-center items-center mx-auto p-10'>
                                    <h1 className='text-center text-xl font-medium'>No Result found </h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills