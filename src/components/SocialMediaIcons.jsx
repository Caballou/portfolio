import './styles/SocialMediaIcons.scss';
import {
  // BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className='socials'>
      <a href='https://github.com/Caballou' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/leandrodamian/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://www.instagram.com/leandrodamian93/'
        target='_blank'
        rel='noreferrer'
      >
        <BsInstagram />
      </a>
      {/* <a
        href='https://www.facebook.com/ElCaballou/'
        target='_blank'
        rel='noreferrer'
      >
        <BsFacebook />
      </a> */}
      <a
        // href='https://api.whatsapp.com/send/?phone=&text=Hi%20Leandro!%20I%20saw%20your%20web%20portfolio%20and%20I%20would%20like%20to%20hire%20you!'
        href='https://api.whatsapp.com/send/?phone=5491135044348'
        target='_blank'
        rel='noreferrer'
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
