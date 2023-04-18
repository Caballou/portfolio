import { useEffect, useState } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import './App.scss';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects';

function App() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <ReactScrollWheelHandler>
        <Navbar
          isTopOfPage={isTopOfPage}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
      </ReactScrollWheelHandler>
    </div>
  );
}

export default App;
