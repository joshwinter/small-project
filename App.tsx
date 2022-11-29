import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from '@routes';
import theme from 'styles/theme';

const App = () => (
  <ThemeProvider {...{ theme }}>
    <Routes />
  </ThemeProvider>
);

export default App;
