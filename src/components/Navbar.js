import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="nav-bar">
      <div className="left-bar">
        <h2 className='nav-brand'>Book Store</h2>
        <ul className="navList">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="navItem" exact>
                {link.text}
                {' '}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-icom">
      <button class="icon-button" type="button"><span class="material-icons primary-color">person</span></button>
      </div>
    </nav>
  );
};
export default NavBar;
