import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/Theme';

export default function Layout({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main {...props}>
        {children}
      </main>
    </ThemeProvider>
  );
}
