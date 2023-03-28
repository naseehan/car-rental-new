import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './Pages/About';
import Models from './Pages/Models';
import Testimonials from './Pages/Testimonials';
import Team from './Pages/Team';
import Contact from './Pages/Contact';



function App() {
  return (
    <>
    
<Navbar />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path='/about' element={<About />} /> 
  <Route path="/models" element={<Models />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/team" element={<Team />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</>
  );
}

export default App;
