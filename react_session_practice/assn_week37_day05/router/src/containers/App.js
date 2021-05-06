// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (<><div className="container">
    <BrowserRouter>
    <Layout>
      <h1>App</h1>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <section>
          <div className="about">
          </div>
          <div className="exp">
          </div>
        </section>
      </div>
      </Layout>
    </BrowserRouter>
  </div>

    </>
  );
}

export default App;
