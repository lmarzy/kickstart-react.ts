import 'styles/app.scss';

import React, { FunctionComponent, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages';
import { Footer, Header } from './components';

export const App: FunctionComponent = (): ReactElement => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <div>testing...</div>
    </main>
    <Footer />
  </>
);
