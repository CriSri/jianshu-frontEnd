import React from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
      </Provider>
      
    </div>

  );
}

export default App;
