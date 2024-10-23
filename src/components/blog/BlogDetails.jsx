import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState()

    useEffect(() => {
        fetch(`https://raiyan-portfolio-be.vercel.app/api/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data.data))
    }, [])

    return (
        <div>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold text-gray-800">Header</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-2/3 px-4">
                        <h2 className="text-4xl font-bold mb-4">{blog?.title}</h2>
                        <p className="text-gray-500 text-xl">{blog?.body}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <h3 className="text-lg font-bold mb-4">Sidebar</h3>
                        <ul className="list-disc pl-4">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>
            </main>
            {/* <footer className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-gray-700">Footer</p>
                </div>
            </footer> */}
        </div>
    )
}

export default BlogDetails