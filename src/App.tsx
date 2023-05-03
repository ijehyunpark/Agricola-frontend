import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import './App.css';

import Main from './layout/Main';
import GameScreen from './components/gameScreen/GameScreen';
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
