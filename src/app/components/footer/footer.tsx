import React, { ReactElement } from 'react';

import { Container } from '../../../components/common';

import './footer.scss';

export const Footer = (): ReactElement => (
  <footer className="c-footer">
    <Container>
      <small>&copy; 2020 - React Apollo</small>
    </Container>
  </footer>
);
