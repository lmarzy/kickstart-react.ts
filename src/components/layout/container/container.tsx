import React, { FunctionComponent } from 'react';

import { StyledContainer } from './container.styled';

export const Container: FunctionComponent = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
