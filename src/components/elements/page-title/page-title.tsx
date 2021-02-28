import React, { FunctionComponent, ReactElement } from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }): ReactElement => (
  <h1>{title}</h1>
);
