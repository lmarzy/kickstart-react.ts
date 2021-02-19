import './footer.scss';

import React, { ReactElement } from 'react';

import { Container } from '../../../components/common';

export const Footer = (): ReactElement => (
  <footer className="c-footer">
    <Container>
      <small>&copy; 2020 - React Apollo</small>
    </Container>
  </footer>
);
