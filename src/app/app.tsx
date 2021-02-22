import React, { FunctionComponent, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../assets/styles/global';
import { ThemeProvider } from '../contexts';
import { HomePage } from '../pages';
import { Footer, Header } from './components';

export const App: FunctionComponent = (): ReactElement => (
  <ThemeProvider>
    <GlobalStyles />
    <Header />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <div>testing...</div>
    </main>
    <Footer />
  </ThemeProvider>
);
