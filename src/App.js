import {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css'
import Home from './home/home';
import NavBar from './header footer/navbar';
import Footer from './header footer/footer';
import Store from './store/store'
import Cart from './cart/cart'
import Accessories from './store/accessories'

class App extends Component 
{
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/accessories/:accCategory" component={Accessories} exact/>
          <Route path="/:category" component={Store} exact/>
          <Route path="/" component={Home} exact/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
