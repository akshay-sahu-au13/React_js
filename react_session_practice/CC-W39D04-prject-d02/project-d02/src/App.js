// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
    <BrowserRouter>
      <Layout>
        <div className="section">
          <Switch>
            {
            Routes.map((route, id) => {
              return <Route key={id} {...route} />
            })
            }
          </Switch>
        </div>
      </Layout>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
