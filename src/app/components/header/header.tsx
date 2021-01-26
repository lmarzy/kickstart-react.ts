import React, { ReactElement, useState } from 'react';

import { Nav } from '../';
import { Container } from '../../../components/common';

import './header.scss';

export const Header = (): ReactElement => {
  const [navVisible, toggleNavVisibility] = useState(false);

  return (
    <header className="c-header">
      <Container>
        <h1>React Apollo</h1>
        <button
          className="c-header__togglenav"
          type="button"
          onClick={() => toggleNavVisibility(!navVisible)}
        >
          {navVisible ? 'Hide' : 'Show'} Site Navigation
        </button>
        <Nav visible={navVisible} closeNav={toggleNavVisibility} />
      </Container>
    </header>
  );
};
