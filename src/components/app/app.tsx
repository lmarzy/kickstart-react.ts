import React, { FunctionComponent, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from '@assets/styles/global';
import { Footer, Header } from '@components/layout';
import routes from '@config/routes';
import { ThemeProvider } from '@contexts';

export const App: FunctionComponent = (): ReactElement => (
  <ThemeProvider>
    <GlobalStyles />
    <Header />
    <main>
      <Switch>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </main>
    <Footer />
  </ThemeProvider>
);
