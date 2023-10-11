import React, { useState, useEffect } from "react";
import './navbar.css';
import { GiIronHulledWarship } from 'react-icons/gi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const nav = document.querySelector('.navbarSection');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    return () => {
      window.removeEventListener('scroll');
    }
  }, []);

  return (
    <section className={`navbarSection ${isNavOpen ? 'open' : ''}`}>
      <header className="header flex">
        <div className="logodiv">
          <a href="#" className="logo flex">
            <h1><GiIronHulledWarship className='icon' /> AYTOUR</h1>
          </a>
        </div>
        <div className={`toggle-button ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          {isNavOpen ? <AiOutlineClose className="icon" /> : <AiOutlineMenu className="icon" />}
        </div>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
