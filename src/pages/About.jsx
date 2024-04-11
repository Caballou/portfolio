/* eslint-disable react/no-unescaped-entities */
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import './styles/About.scss';
import Skills from '../components/Skills.jsx';
import { useTranslation } from 'react-i18next';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global');

  const isSmallScreen = useMediaQuery('sm');
  const isMediumScreen = useMediaQuery('md');

  return (
    <section id='about'>
      <div
        className={`container flex  ${
          isSmallScreen
            ? 'flex-wrap-reverse mb-12'
            : isMediumScreen
            ? 'flex-wrap-reverse mt-12'
            : 'flex-nowrap mt-16'
        }`}
      >
        <div className='vid mt-6 w-fit'>
          <div className='vid-border '>
            <iframe
              className={`mr-10 w-fit
                ${isSmallScreen ? ' mr-0 border border-white' : null}`}
              src='https://drive.google.com/file/d/1zlV4SN19oS_svqJbtnAvE3Sed8S9NJob/preview'
              width='640'
              height='480'
              allow='autoplay'
            ></iframe>
          </div>
        </div>

        <div className={`info `}>
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
            <p className='text-3xl font-bold'>{t('about.title')}</p>
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
            {i18n.language === 'en' ? (
              <>
                <span className='capital'>H</span>
                <span className='text'>
                  ello! I hope you are well :) I am Leandro, a{' '}
                </span>
                <span className='important'>sound engineering</span>
                <span className='text'> student,</span>{' '}
                <span className='important'>developer</span>{' '}
                <span className='text'> and </span>
                <span className='important'>
                  multi-instrumentalist musician
                </span>
                <span className='text'>
                  , from Buenos Aires, Argentina. I have been interested in
                  technology, sound and mathematics all my life.
                  <br />
                  <br />
                  Throughout my professional training at the National University
                  of Tres de Febrero I developed several projects related to{' '}
                  <span className='important'>acoustics </span>,{' '}
                  <span className='important'>electronics</span> and{' '}
                  <span className='important'>recording</span>, which are shown
                  in the "Projects" section!{' '}
                </span>{' '}
                <span className='text'>
                  <br />
                  <br />
                  In addition, I studied{' '}
                  <span className='important'>programming </span> self-taught
                  since I consider that, nowadays, it is a key tool for every
                  professional in any area.
                </span>
              </>
            ) : (
              <>
                <span className='capital'>H</span>
                <span className='text'>
                  ola! Espero que te encuentres bien :) Soy Leandro, estudiante
                  de{' '}
                </span>
                <span className='important'>ingeniería de sonido</span>
                <span className='text'>,</span>{' '}
                <span className='important'>desarrollador</span>{' '}
                <span className='text'> y </span>
                <span className='important'>músico multinstrumentista</span>
                <span className='text'>
                  , de Buenos Aires, Argentina. Toda mi vida me ha interesado la
                  tecnología, el sonido y las matemáticas. <br />
                  <br />A lo largo de mi formación profesional en la Universidad
                  Nacional de Tres de Febrero desarrollé varios proyectos
                  relacionados a la <span className='important'>acústica </span>
                  , la <span className='important'>electrónica</span> y la{' '}
                  <span className='important'>grabación</span>, los cuales se
                  muestran en la sección "Proyectos"!{' '}
                </span>{' '}
                <span className='text'>
                  <br />
                  <br />
                  Además, estudié{' '}
                  <span className='important'>programación</span> de manera
                  autodidacta, ya que considero que, hoy en día, es una
                  herramienta clave para todo profesional de cualquier area.
                </span>
              </>
            )}
          </motion.div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
