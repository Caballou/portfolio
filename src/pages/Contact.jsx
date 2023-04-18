import { useInView } from 'react-intersection-observer';
import './Contact.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useMediaQuery from '../hooks/useMediaQuery';
import { IoLocationSharp, IoMailSharp, IoPersonSharp } from 'react-icons/io5';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Contact = ({ setSelectedPage }) => {
  // Ref to set selected page
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.7,
  });

  if (contactInView && setSelectedPage !== 4) {
    setSelectedPage(4);
  }

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
          alert(
            'Thank you for contacting me! 🤗 I will answer you as soon as possible 🫡'
          );
          form.current.reset();
        },
        (error) => {
          console.log('Failed', error.status, error.text);
          alert('Han error has ocurred😥 please, try again');
        }
      );
  };

  const isMediumScreen = useMediaQuery('md');

  return (
    <section id='contact' ref={contactRef}>
      <div className='container'>
        <h2 className='title'>GET IN TOUCH 😎👇</h2>
        <div
          className={
            isMediumScreen
              ? 'contactInfo-container md'
              : 'contactInfo-container sm'
          }
        >
          <div className={isMediumScreen ? 'contactInfo md' : 'contactInfo sm'}>
            <h4>Contact Information</h4>
            <p>
              Don't hesitate to contact me😊. Let's connect and build awesome
              things together!
            </p>
            <div className='personalInfo-container'>
              <div className='allInfo'>
                <div className='icon'>
                  <IoPersonSharp />
                </div>
                <div className='info'>
                  <h5>Name</h5>
                  <span>Leandro Gómez</span>
                </div>
              </div>
              <div className='allInfo'>
                <div className='icon'>
                  <IoLocationSharp />
                </div>
                <div className='info'>
                  <h5>Location</h5>
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
          </div>
          <div
            className={
              isMediumScreen ? 'form-container md' : 'form-container sm'
            }
          >
            <form ref={form} onSubmit={sendEmail} className='form'>
              <h4>Message Me</h4>
              <div className='name-email'>
                <input
                  type='text'
                  placeholder='Name'
                  name='firstName'
                  required
                />
                <input type='email' placeholder='Email' name='email' required />
              </div>

              <input
                type='text'
                placeholder='Subject'
                name='subject'
                required
              />
              <textarea placeholder='Message' name='message' required />
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Contact;
