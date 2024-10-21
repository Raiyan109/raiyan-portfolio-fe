import About from "../../about/About"
import Blog from "../../blog/Blog"
import Contact from "../../contact/Contact"
import Home from "../../home/Home"
import Portfolio from "../../portfolio/Portfolio"
import Resume from "../../resume/Resume"
import ScrollVelozity from "../../scrollVelozity/ScrollVelozity"
import Services from "../../services/Services"
import Sidebar from "../../sidebar/Sidebar"


const HomeLayout = () => {
    return (
        <div>
            <div className=''>
                <div className=''>
                    <Sidebar />
                </div>
                <div className="ml-0 md:ml-[80px]">
                    <Home />
                    <About />
                    <ScrollVelozity />
                    <Services />
                    <Resume />
                    <Portfolio />
                    {/* <Pricing /> */}
                    {/* <Testimonials /> */}
                    <Blog />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout