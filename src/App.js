import React from 'react';
import store from './store/index';
import { Provider } from 'react-redux';
import { GlobalStyle } from "./style";

import Header from './components/header/index';

function App() {
  return (
      <Provider store={ store }>
          <GlobalStyle />
          <Header />
          <div>123</div>
      </Provider>
  );
}

export default App;
