/* eslint-disable react/no-unescaped-entities */
import './styles/Skills.scss';
import { motion } from 'framer-motion';
import { Slider } from './Slider';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const [, i18n] = useTranslation('global');
  return (
    <motion.div
      className='skills'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className='description'>
        {i18n.language === 'en' ? (
          <>
            {' '}
            <span className='text'>
              These are some of the technologies that I can currently handle. If
              the technology you're looking for isn't here,{' '}
            </span>
            <span className='skill-important'>I'll be happy to learn it!</span>
          </>
        ) : (
          <>
            {' '}
            <span className='text'>
              Estas son algunas de las tecnologías que puedo manejar
              actualmente. Si la tecnología que buscas no está aquí,{' '}
            </span>
            <span className='skill-important'>con gusto la aprenderé!</span>
          </>
        )}
      </p>

      <Slider />
    </motion.div>
  );
};

export default Skills;
