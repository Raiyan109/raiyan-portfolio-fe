import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import parse from "html-react-parser";
import axios from "axios";

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState()

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://raiyan-portfolio-be.vercel.app/api/v1/blog/${id}`);
                console.log(res.data.data);
                setBlog(res.data.data);

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        })();
    }, [id]);

    console.log(blog);


    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div className="bg-cover bg-center text-center overflow-hidden"

            >
                <img src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1" alt="" />
            </div>
            <div className="max-w-3xl mx-auto">
                <div
                    className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-[#140152] relative top-0 -mt-32 p-5 sm:p-10">
                        <h1 href="#" className=" font-bold text-3xl mb-2">{blog?.title}</h1>
                        <p className=" text-xs mt-2">Written By:
                            <a href="#"
                                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                Raiyan Kabir
                            </a> at
                            <a href="#"
                                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                {blog?.createdAt}
                            </a>
                        </p>

                        <p className="text-base leading-8 my-5">
                            {blog?.body && parse(blog?.body)}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogDetails