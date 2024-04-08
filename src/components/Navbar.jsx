import './styles/Navbar.scss';
import { useState } from 'react';
import {
  AiOutlineDesktop,
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';
import useMediaQuery from '../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({ selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isMediumScreen = useMediaQuery('md');

  const [t, i18n] = useTranslation('global');

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-logo'>
          Lg.
          {/* <div className='not-brand'>({t('navbar.brand')})</div>{' '} */}
        </div>

        {/*DESKTOP NAV*/}
        {isMediumScreen ? (
          <div className='nav-sections'>
            <Link
              to='/'
              className={`nav-link ${selectedPage === 1 ? 'selected' : null}`}
              onClick={() => setSelectedPage(1)}
            >
              <AiOutlineHome />
              <span
                className={
                  selectedPage !== 1 ? 'nav-span ul-animation' : 'nav-span'
                }
              >
                {t('navbar.home')}
              </span>
            </Link>
            <Link
              to='/about'
              className={`nav-link ${selectedPage === 2 ? 'selected' : null}`}
              onClick={() => setSelectedPage(2)}
            >
              <AiOutlineUser />
              <span
                className={
                  selectedPage !== 2 ? 'nav-span ul-animation' : 'nav-span'
                }
              >
                {t('navbar.about')}
              </span>
            </Link>

            <Link
              to='/projects'
              className={`nav-link ${selectedPage === 3 ? 'selected' : null}`}
              onClick={() => setSelectedPage(3)}
            >
              <AiOutlineDesktop />
              <span
                className={
                  selectedPage !== 3 ? 'nav-span ul-animation' : 'nav-span'
                }
              >
                {t('navbar.projects')}
              </span>
            </Link>
            <Link
              to='/contact'
              className={`nav-link ${selectedPage === 4 ? 'selected' : null}`}
              onClick={() => setSelectedPage(4)}
            >
              <AiOutlinePhone />
              <span
                className={
                  selectedPage !== 4 ? 'nav-span ul-animation' : 'nav-span'
                }
              >
                {t('navbar.contact')}
              </span>
            </Link>
            <a
              href='https://drive.google.com/u/0/uc?id=1u0gqOsLdOkp-GRN6FXXz4DAoGJC9qHpZ&export=download'
              className='nav-link nav-resume'
              download
            >
              <AiOutlineIdcard />
              <span className='ul-animation'> {t('navbar.resume')}</span>
            </a>

            <button
              className='language-button'
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              <img
                className='language-img en'
                src='./assets/languages/en.png'
                alt='en'
              />
            </button>

            <button
              className='language-button'
              onClick={() => {
                i18n.changeLanguage('es');
              }}
            >
              <img
                className='language-img es'
                src='./assets/languages/es.png'
                alt='es'
              />
            </button>
          </div>
        ) : (
          <div className='flex flex-row'>
            <div className='flex mr-4 px-4'>
              <button
                className='language-button pr-5'
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              >
                <img
                  className='language-img en w-8 rounded-md'
                  src='./assets/languages/en.png'
                  alt='en'
                />
              </button>
              <button
                className='language-button'
                onClick={() => {
                  i18n.changeLanguage('es');
                }}
              >
                <img
                  className='language-img es w-8'
                  src='./assets/languages/es.png'
                  alt='es'
                />
              </button>
            </div>
            <button
              className='nav-burger'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <AiOutlineMenu />
            </button>
          </div>
        )}

        {/*MOBILE MENU*/}
        {!isMediumScreen && isMenuToggled && (
          <div className='sidebar'>
            {/* CLOSE ICON */}

            <div className='side-button-container'>
              <button
                className='side-button'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineMenu />
              </button>
            </div>
            {/*MENU ITEMS */}
            <div className='side-items'>
              <Link
                to='/'
                className='side-link'
                onClick={() => {
                  setSelectedPage(1);
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <AiOutlineHome />
                <span style={{ marginLeft: '5px' }}>Home</span>
              </Link>
              <Link
                to='/about'
                className='side-link'
                onClick={() => {
                  setSelectedPage(2);
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <AiOutlineUser />
                <span style={{ marginLeft: '5px' }}>About</span>
              </Link>
              <Link
                to='/projects'
                className='side-link'
                onClick={() => {
                  setSelectedPage(3);
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <AiOutlineDesktop />
                <span style={{ marginLeft: '5px' }}>Projects</span>
              </Link>
              <Link
                to='/contact'
                className='side-link'
                onClick={() => {
                  setSelectedPage(4);
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <AiOutlinePhone />
                <span style={{ marginLeft: '5px' }}>Contact</span>
              </Link>
              <a
                href='./resume/RESUME-LeandroGomez.pdf'
                className='side-link side-resume'
                download
              >
                <AiOutlineIdcard />
                <span style={{ marginLeft: '5px' }}>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
