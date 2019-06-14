import React,{Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Editor from './pages/editor'
import Login from './pages/login'
import Register from "./pages/register"
class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
              <BrowserRouter>
                <div>
                  <Route exact path='/' render={()=>
                    <div>
                      <Header></Header>
                      <Home></Home>
                    </div>
                  }></Route>
                  <Route path='/detail/:id' render={()=>
                    <div>
                      <Header></Header>
                      <Detail/>
                    </div>
                  }></Route>
                  <Route path='/editor' component={Editor}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/register' component={Register}></Route>
                </div>
              </BrowserRouter>

        </Provider>
        
      </div>
  
    )
  }
 
}

export default App;
