import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/userSign/Login'
import Register from './components/userSign/Register'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="flex flex-row">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">   
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
