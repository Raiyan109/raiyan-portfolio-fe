import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Blog from "./Blog"
import './blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:5000/api/v1/blog')
            // console.log(res.data.data);
            setBlogs(res.data.data)
        })()
    }, [])

    return (
        <div id='blog' className='py-1'>
            <div className="card container section"
                data-aos='zoom-in'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
            >
                <h1 className='text-5xl lg:text-[90px] mb-8'>Blog</h1>
                <div className="flex justify-center items-center">
                    <div className="blogGrid">
                        {
                            blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <Blog key={blog._id} blog={blog} />
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

export default Blogs