import { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Posts from './Posts';
function App() {

  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState({});

  const fetchPosts = (id) => {
    const url = id ? "https://jsonplaceholder.typicode.com/posts" : "https://jsonplaceholder.typicode.com/posts/id"

    fetch (url)
      .then(res =>  res.json())
      .then (data => {
        if (id) {
          setInfo(data)
        } else {
          setPosts(data)
        }
      });
  }

  useEffect(() => {
    fetchPosts();

  }, [])


  return (<>
  <div className="container">
    <BrowserRouter>
    <Layout>
      {/* <h1>App</h1> */}
      <div className="container">
        <nav className="navbar">
          <ul>
            <li className="nav-btn"><Link to="/home">Home</Link></li>
              <li className="nav-btn"><Link to="/posts">Posts</Link></li>
          </ul>
            <Link to="/login" className="nav-btn">Login</Link>
        </nav>
        <section>
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/login" component={Login} />

       
        </section>
      </div>
      </Layout>
    </BrowserRouter>
  </div>

    </>
  );
}

export default App;
