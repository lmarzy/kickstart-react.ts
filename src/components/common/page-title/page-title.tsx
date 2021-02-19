import './page-title.scss';

import React, { FunctionComponent, ReactElement } from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }): ReactElement => (
  <h1 className="c-page-title">{title}</h1>
);
