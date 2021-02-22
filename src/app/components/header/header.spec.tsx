import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../../../contexts';
import { Header } from './header';

describe('Header Component', () => {
  test('shows correct title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(getByText('React')).toBeInTheDocument();
  });
});
