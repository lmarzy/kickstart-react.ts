import './nav.scss';

import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  visible: boolean;
  closeNav: (arg0: boolean) => void;
}

export const Nav: FunctionComponent<NavProps> = ({ visible, closeNav }): ReactElement => {
  let classes = 'c-nav';

  if (visible) {
    classes += ' isActive';
  }

  return (
    <nav className={classes}>
      <ul className="c-nav__list">
        <li>
          <Link to="/" className="c-nav__link" onClick={() => closeNav(!visible)}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};
