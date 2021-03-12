import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@contexts';

import { Header } from './header';

describe('Header Component', () => {
  test('shows correct title', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
