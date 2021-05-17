// import logo from './logo.svg';
import './App.css';
import Products from '../components/Products';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        {/* <h1>App</h1> */}
        <h4><Link to="/products">Check out products List</Link> </h4>

        <Switch>
          <Route exact path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
