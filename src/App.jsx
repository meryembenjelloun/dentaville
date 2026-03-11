import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chirurgie from './pages/Chirurgie'
import Enfant from './pages/Enfants'
import Esthetique from './pages/Esthetique'
import Soins from './pages/Soins'
import Protheses from './pages/Protheses'
import Radiologie from './pages/Radiologie'
import Orthodontie  from './pages/Orthodontie'
import Implantologie from './pages/Implantologie'
import ScrollToTop from "./components/ScrollToTop";






const App = () => {
  return (
    <>
    <ScrollToTop />
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/chirurgie" element={<Chirurgie />}/>
   <Route path="/enfants" element={<Enfant/>} />
   <Route path="/esthetique" element={<Esthetique/>} />
   <Route path="/soins" element={<Soins/>} />
   <Route path="/protheses" element={<Protheses/>} />
   <Route path="/radiologie" element={<Radiologie/>} />
   <Route path="/orthodontie" element={<Orthodontie/>} />
   <Route path="/implantologie" element={<Implantologie/>} />

   </Routes>
   </>
     

  )
}

export default App