import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import { Nav } from '@components/sections';

import { Container } from '..';

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  margin-bottom: ${({ theme }) => theme.spacers[4]};

  @media ${({ theme }) => theme.breakpoints[10]} {
    font-size: ${({ theme }) => theme.fontSizes[8]};
  } ;
`;

export const Header = (): ReactElement => {
  const [navVisible, toggleNavVisibility] = useState(false);

  return (
    <header>
      <Container>
        <StyledH1>React</StyledH1>
        <Nav visible={navVisible} closeNav={toggleNavVisibility} />
      </Container>
    </header>
  );
};
