import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
// import Rirs3d from './pages/projects/Rirs3d.jsx';
// import Rirs2d from './pages/projects/Rirs2d.jsx';
// import Auditorium from './pages/projects/Auditorium.jsx';
// import GraphEQ from './pages/projects/GraphEQ.jsx';
// import SoundEffects from './pages/projects/SoundEffects.jsx';
// import Mix from './pages/projects/Mix.jsx';

function App() {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/projects/zonic-3d-rirs' element={<Rirs3d />} />
        <Route path='/projects/gg-rirs' element={<Rirs2d />} />
        <Route path='/projects/auditorium' element={<Auditorium />} />
        <Route path='/projects/500-series-EQ' element={<GraphEQ />} />
        <Route path='/projects/music-and-effects' element={<SoundEffects />} />
        <Route path='/projects/mix' element={<Mix />} /> */}
      </Routes>
    </>
  );
}

export default App;
