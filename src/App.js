import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import BusinessClass from './components/BusinessClass/BusinessClass';
import EconomyClass from './components/EconomyClass/EconomyClass';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';




function App() {

  return (
    <Router>
      <Navbar />
    <Switch>
      <Route exact path="/">
        <Home></Home>
        <Products />
      </Route>
      <Route path="/businessClass/:id">
        <BusinessClass></BusinessClass>
      </Route>
      <Route path="/economy">
        <EconomyClass></EconomyClass>
      </Route>
      <Route>
       
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
