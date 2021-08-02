import React from 'react';
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components';

import theme from './theme'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
