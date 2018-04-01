import React from 'react';
import Link from 'gatsby-link';
import s from './sidebar.module.css';

const Sidebar = ({ menuOpened }) => (
  <div
    className={`${s.sidebarWrapper} ${menuOpened ? s.show : s.hide}`}
  >
    <ul className={s.nav}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://twitter.com/netxm">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/abachuk">Github</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
