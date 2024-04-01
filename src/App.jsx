import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
// import Pricing from './components/pricing/Pricing'
// import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollVelozity from './components/scrollVelozity/ScrollVelozity'
import About2 from './components/about/About2'
import { useState } from 'react'

AOS.init()

function App() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div>
        {/* <svg className={`${isActive ? 'hamRotate ' : null} ham ham1`}
          onClick={toggleClass} viewBox="0 0 100 100" width="80" >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            className="line middle"
            d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg> */}
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <div className="main">
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
          <About2 />
        </div>
      </div>
    </>
  )
}

export default App
