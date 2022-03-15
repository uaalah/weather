import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import Layout from './components/layout/';
import CityComponent from './components/CityComponent';
import Cards from './components/Cards';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CityComponent />
        <Cards />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
