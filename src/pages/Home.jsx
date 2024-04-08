import { motion } from 'framer-motion';
import './styles/Home.scss';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t] = useTranslation('global');

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [t('home.engineer'), t('home.musician'), t('home.dev')];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250 - Math.random() * 50);
  const period = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.6);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250 - Math.random() * 50);
    }
  };

  const isMediumScreen = useMediaQuery('md');
  const isLargeScreen = useMediaQuery('lg');
  return (
    <section id='home'>
      <div className='container'>
        {/* IMAGE SECTION */}

        <motion.div
          className='img'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='img-border'>
            <img
              className={isLargeScreen ? 'lg' : isMediumScreen ? 'md' : 'sm'}
              alt='profile-pic'
              src='../src/assets/profile-image.png'
            />
          </div>
        </motion.div>

        {/* MAIN SECTION */}

        {/* HEADING SECTION */}
        <div className='info'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p
              className={
                isLargeScreen
                  ? 'name-lg'
                  : isMediumScreen
                  ? 'name-md'
                  : 'name-sm'
              }
            >
              {t('home.hi')}
              <br />
              Leandro Gómez
              <br />
              <span className='text-rotate'>&lt; {text} /&gt;</span>
            </p>
            <p className='description'>{t('home.description')}</p>
            {/* <p className='description-sh'>
              (don't tell anybody, but I like front-end so much 🤫🤭)
            </p> */}
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className='resume-action'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              className=''
              href='https://drive.google.com/u/0/uc?id=1u0gqOsLdOkp-GRN6FXXz4DAoGJC9qHpZ&export=download'
              download
            >
              {t('home.download')}
            </a>
          </motion.div>

          <motion.div
            className='home-socials'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
