import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App</h1>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
