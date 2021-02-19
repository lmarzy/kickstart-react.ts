import './container.scss';

import React, { FunctionComponent } from 'react';

export const Container: FunctionComponent = ({ children }) => (
  <div className="c-container">{children}</div>
);
