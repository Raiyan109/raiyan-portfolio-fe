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

AOS.init()

function App() {

  return (
    <>
      <div>
        <Sidebar />
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
        </div>
      </div>
    </>
  )
}

export default App
