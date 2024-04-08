import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import './styles/Projects.scss';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';

const Projects = () => {
  const [t] = useTranslation('global');

  const isMediumScreen = useMediaQuery('md');

  return (
    <section id='projects'>
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
          <p className='text-3xl font-bold'>{t('projects.title')}</p>
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
                href='https://drive.google.com/file/d/1hII70tAlmEVbalyWEHOYbYaxdxHc4aQo/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/rir3d.png'
                    alt='zonic-3d-rirs'
                  />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.3d')}
                  </p>
                  <span className='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://drive.google.com/file/d/1T7zW2eH13X6pmTQv_ZIldzVxuJ_eNHFM/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img src='./assets/projects-img/eq.png' alt='graph-eq' />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.eq')}
                  </p>
                  <span className='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://drive.google.com/file/d/1lnoSiBEl8QuP2TYsCggrCAwMOhOD_yIE/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img src='./assets/projects-img/mix.png' alt='mix' />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.mix')}
                  </p>
                  <span className='code'> {'/>'} </span>
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
                href='https://drive.google.com/file/d/180L3VrhtpSxHZxYZrgR02zHzxES38N-x/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img src='./assets/projects-img/rir2d.png' alt='gg-rirs-2d' />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.2d')}
                  </p>
                  <span className='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://drive.google.com/file/d/1C1eY6fyUXf187A9-kWw65DzcZJQ7yJaD/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/auditorium.png'
                    alt='auditorium'
                  />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.auditorium')}
                  </p>
                  <span className='code'> {'/>'} </span>
                </div>
              </a>
            </div>
            <div className='project'>
              <a
                href='https://drive.google.com/file/d/1ZOY2eQkCpyLXf8_T6stQH-fKZOHfIl-L/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                <div className='imgBox'>
                  <img
                    src='./assets/projects-img/sound-effects.png'
                    alt='sound-effects'
                  />
                </div>
                <div className='name'>
                  <span className='code'> {'<'} </span>
                  <p className={!isMediumScreen ? 'sm' : ''}>
                    {t('projects.effects')}
                  </p>
                  <span className='code'> {'/>'} </span>
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
