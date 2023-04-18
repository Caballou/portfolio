import './Skills.scss';
import { motion } from 'framer-motion';
import React from 'react';
import { Slider } from '../components/Slider';

const Skills = () => {
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
        <span className='text'>
          These are some of the technologies that I can currently handle. If the
          technology you're looking for isn't here,{' '}
        </span>
        <span className='skill-important'>I'll be happy to learn it!</span>
      </p>

      <Slider />
    </motion.div>
  );
};

export default Skills;
