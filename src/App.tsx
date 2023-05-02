import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import './App.css';

import Main from './layout/Main';
import GameScreen from './components/GameScreen';
import SampleComponent from './components/SampleComponent';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GameScreen />
          {/* <SampleComponent /> */}
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
