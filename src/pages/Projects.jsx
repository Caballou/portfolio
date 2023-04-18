import { useInView } from 'react-intersection-observer';
import useMediaQuery from '../hooks/useMediaQuery';
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
        <h2 className='title'>SOME OF MY PROJECTS</h2>
        <div className={!isMediumScreen ? 'grid sm' : 'grid'}>
          <div className={!isMediumScreen ? 'row sm' : 'row'}>
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
          </div>
          <div className={!isMediumScreen ? 'row sm' : 'row'}>
            <div className='project'>
              <a
                href='https://caballou.github.io/drum-machine/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/drum-machine.png'
                    alt='drum-machine'
                  />
                </div>
                <div className='name'>
                  <span class='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>Drum Machine</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
