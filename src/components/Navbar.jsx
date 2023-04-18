import React from 'react';
import './Navbar.scss';
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

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isMediumScreen = useMediaQuery('md');

  return (
    <nav className={isTopOfPage ? 'navbar' : 'navbar blur'}>
      <div className='nav-container'>
        <div className='nav-logo'>
          Lg. <div className='not-brand'>(Not the brand)</div>{' '}
        </div>

        {/*DESKTOP NAV*/}
        {isMediumScreen ? (
          <div className='nav-sections'>
            <a
              href='#home'
              className={selectedPage === 1 ? 'nav-link selected' : 'nav-link'}
              onClick={() => setSelectedPage(1)}
            >
              <AiOutlineHome />
              <span
                className={
                  selectedPage !== 1 ? 'nav-span underline' : 'nav-span'
                }
              >
                Home
              </span>
            </a>
            <a
              href='#about'
              className={selectedPage === 2 ? 'nav-link selected' : 'nav-link'}
              onClick={() => setSelectedPage(2)}
            >
              <AiOutlineUser />
              <span
                className={
                  selectedPage !== 2 ? 'nav-span underline' : 'nav-span'
                }
              >
                About
              </span>
            </a>

            <a
              href='#projects'
              className={selectedPage === 3 ? 'nav-link selected' : 'nav-link'}
              onClick={() => setSelectedPage(3)}
            >
              <AiOutlineDesktop />
              <span
                className={
                  selectedPage !== 3 ? 'nav-span underline' : 'nav-span'
                }
              >
                Projects
              </span>
            </a>
            <a
              href='#contact'
              className={selectedPage === 4 ? 'nav-link selected' : 'nav-link'}
              onClick={() => setSelectedPage(4)}
            >
              <AiOutlinePhone />
              <span
                className={
                  selectedPage !== 4 ? 'nav-span underline' : 'nav-span'
                }
              >
                Contact
              </span>
            </a>
            <a
              href='https://drive.google.com/u/0/uc?id=1u0gqOsLdOkp-GRN6FXXz4DAoGJC9qHpZ&export=download'
              className='nav-link nav-resume'
              download
            >
              <AiOutlineIdcard />
              <span className='underline'>Resume</span>
            </a>
          </div>
        ) : (
          <button
            className='nav-burger'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <AiOutlineMenu />
          </button>
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
              <a
                href='#home'
                className='side-link'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineHome />
                <span style={{ marginLeft: '5px' }}>Home</span>
              </a>
              <a
                href='#about'
                className='side-link'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineUser />
                <span style={{ marginLeft: '5px' }}>About</span>
              </a>
              <a
                href='#projects'
                className='side-link'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineDesktop />
                <span style={{ marginLeft: '5px' }}>Projects</span>
              </a>
              <a
                href='#contact'
                className='side-link'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlinePhone />
                <span style={{ marginLeft: '5px' }}>Contact</span>
              </a>
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
