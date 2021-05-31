import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { routes } from "../routes/routes"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route,index) => {
            return <Route key={index} {...route} />
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}


export default App;