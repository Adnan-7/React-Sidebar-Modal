import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import { links, social } from './data';

const Sidebar = () => {
  return (
    <aside className='sidebar show-sidebar'>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='Adnan Khan' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
