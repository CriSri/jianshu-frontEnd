import React,{Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <div>
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Home}></Route>
              <Route  path='/detail' component={Detail}></Route>
            </div>
          </BrowserRouter>
          </div>
        </Provider>
        
      </div>
  
    )
  }
 
}

export default App;
