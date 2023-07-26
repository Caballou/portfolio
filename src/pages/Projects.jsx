import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import './Projects.scss';

const Projects = ({ setSelectedPage }) => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.7,
  });

  if (projectsInView && setSelectedPage !== 3) {
    setSelectedPage(3);
  }

  const isMediumScreen = useMediaQuery('md');

  return (
    <section id='projects' ref={projectsRef}>
      <div className='container'>
        <motion.h2
          className='title'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          SOME OF MY PROJECTS
        </motion.h2>
        <div className={!isMediumScreen ? 'grid sm' : 'grid'}>
          <motion.div
            className={!isMediumScreen ? 'row sm' : 'row'}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='project'>
              <a
                href='https://caballou.github.io/pomodoro-clock/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/pomodoro-clock.png'
                    alt='promodoro-clock'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>Pomodoro Clock</p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://caballou.github.io/javascript-calculator/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/javascript-calculator.png'
                    alt='javascript-calculator'
                  />
                </div>

                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    JavaScript Calculator
                  </p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://caballou.github.io/choropleth-map/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/choropleth-map.png'
                    alt='choropleth-map'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>Choropleth Map</p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            className={!isMediumScreen ? 'row sm' : 'row'}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='project'>
              <a
                href='https://skycheck.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/skycheck.png'
                    alt='skycheck-weather-app'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>Weather App</p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://caballou.github.io/heat-map/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/heat-map.png'
                    alt='heat-map'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>Heat Map</p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://caballou.github.io/markdown-previewer/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/markdown-previewer.png'
                    alt='markdown-previewer'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    Markdown Previewer
                  </p>
                  <span class='code'> {'/>'} </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
