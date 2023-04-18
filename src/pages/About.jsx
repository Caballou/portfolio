import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import './About.scss';
import Skills from './Skills.jsx';
import { useInView } from 'react-intersection-observer';

const About = ({ setSelectedPage }) => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.7 });

  if (aboutInView && setSelectedPage !== 2) {
    setSelectedPage(2);
  }

  const isMediumScreen = useMediaQuery('md');
  const isLargeScreen = useMediaQuery('lg');
  return (
    <section id='about' ref={aboutRef}>
      <div className='container'>
        <motion.div
          className='img'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='img-border'>
            <img
              className={isLargeScreen ? 'lg' : isMediumScreen ? 'md' : 'sm'}
              alt='profile-pic'
              src='assets/about-image.png'
            />
          </div>
        </motion.div>

        <div
          className={
            isLargeScreen
              ? 'info info-lg'
              : isMediumScreen
              ? 'info info-md'
              : 'info info-sm'
          }
        >
          <motion.h2
            className='title'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            className='description'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className='capital'>H</span>
            <span className='text'>
              ello! I hope you are well :) I am Leandro from Buenos Aires,
              Argentina. As it says on the home page, I'm a{' '}
            </span>
            <span className='important'>developer</span>,{' '}
            <span className='text'>a</span>{' '}
            <span className='important'>multi-instrumentalist musician</span>{' '}
            <span className='text'>, and (almost) an </span>
            <span className='important'>acoustic engineer</span>{' '}
            <span className='text'>
              . All my life I have been interested in computers and technology,
              as well as music. <br />
              <br />
              From about June 2022 I began to study programming in a self-taught
              way, practically every day for several hours. Reading, learning,
              watching videos and doing projects. I can now consider myself a{' '}
            </span>
            <span className='important'>MERN Stack developer</span>,{' '}
            <span className='text'>
              since I dedicated myself to carrying out projects with these
              technologies (
            </span>
            <span className='important'>
              MongoDB, Express, React.js and Node.js
            </span>{' '}
            <span className='text'>
              ).
              <br />
              <br />
              At the university I also did digital signal processing practices
              using Python and Matlab.
            </span>
          </motion.div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
