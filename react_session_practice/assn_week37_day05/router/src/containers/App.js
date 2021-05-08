// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (<>
  <div className="container">
    <BrowserRouter>
    <Layout>
      <h1>App</h1>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li className="nav-btn"><Link to="/home">Home</Link></li>
              <li className="nav-btn"><Link to="/posts">Posts</Link></li>
          </ul>
            <Link to="/login" className="nav-btn">Login</Link>
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
