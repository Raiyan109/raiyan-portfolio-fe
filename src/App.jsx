import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

AOS.init()

function App() {


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
