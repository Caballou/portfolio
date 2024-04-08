import './styles/Contact.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useMediaQuery from '../hooks/useMediaQuery';
import { IoLocationSharp, IoMailSharp, IoPersonSharp } from 'react-icons/io5';
import SocialMediaIcons from '../components/SocialMediaIcons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation('global');

  // Send email via emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolio_contact',
        'portfolio_template',
        form.current,
        'uLQMnJ4WsD1ain_Ye'
      )
      .then(
        (res) => {
          console.log('Success', res.status, res.text);
          i18n.language === 'en'
            ? alert(
                'Thank you for contacting me! 🤗 I will answer you as soon as possible 🫡'
              )
            : alert(
                '¡Gracias por contactarme! 🤗 Te responderé lo antes posible 🫡'
              );
          form.current.reset();
        },
        (error) => {
          console.log('Failed', error.status, error.text);
          i18n.language === 'en'
            ? alert('An error has occurred😥 please, try again')
            : alert('Se ha producido un error😥 por favor, inténtalo de nuevo');
        }
      );
  };

  const isMediumScreen = useMediaQuery('md');

  return (
    <section id='contact'>
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
          <p className='text-3xl font-bold'>{t('contact.title')}</p>
        </motion.h2>
        <div
          className={
            isMediumScreen
              ? 'contactInfo-container md'
              : 'contactInfo-container sm'
          }
        >
          <motion.div
            className={isMediumScreen ? 'contactInfo md' : 'contactInfo sm'}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h4>{t('contact.subtitle')}</h4>
            <p>{t('contact.description')}</p>
            <div className='personalInfo-container'>
              <div className='allInfo'>
                <div className='icon'>
                  <IoPersonSharp />
                </div>
                <div className='info'>
                  <h5>{t('contact.name')}</h5>
                  <span>Leandro Gómez</span>
                </div>
              </div>
              <div className='allInfo'>
                <div className='icon'>
                  <IoLocationSharp />
                </div>
                <div className='info'>
                  <h5>{t('contact.location')}</h5>
                  <span>Villa Luzuriaga, Buenos Aires, Argentina</span>
                </div>
              </div>
              <div className='allInfo'>
                <div className='icon'>
                  <IoMailSharp />
                </div>
                <div className='info'>
                  <h5>Email</h5>
                  <a href='mailto:gomezld93@gmail.com'>gomezld93@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          <div
            className={
              isMediumScreen ? 'form-container md' : 'form-container sm'
            }
          >
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className='form'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h4>{t('contact.messageMe')}</h4>
              <div className='name-email'>
                <input
                  type='text'
                  placeholder={t('contact.name')}
                  name='name'
                  required
                />
                <input type='email' placeholder='Email' name='email' required />
              </div>

              <input
                type='text'
                placeholder={t('contact.subjectBox')}
                name='subject'
                required
              />
              <textarea
                placeholder={t('contact.messageBox')}
                name='message'
                required
              />
              <button type='submit'>{t('contact.send')}</button>
            </motion.form>
          </div>
        </div>
        <motion.div
          className='socials-contact'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        <motion.div
          className='signature'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {t('contact.made')}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
