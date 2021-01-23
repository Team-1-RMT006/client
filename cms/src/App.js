import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/userSign/Login';
import Register from './components/userSign/Register';
import EventDetail from './components/Details/EventDetail';
import MyEvent from './components/MyEvent/MyEvent';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory();
  useEffect(()=>{
    if(loggedIn){
      history.push('/');
    }else {
      history.push('/login');
    }
  }, [loggedIn, history]);
  return (
    <div className="app">
      <div className="flex flex-row">
        <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Dashboard loggedIn={loggedIn} />
          </Route>
          <Route path="/detail/:id">
            <EventDetail />
          </Route>
          <Route path="/event/:id">
            <MyEvent loggedIn={loggedIn} />
          </Route>
          <Route exact path="/login">
            <Login loggedIn={loggedIn} />
          </Route>
          <Route exact path="/register">   
            <Register loggedIn={loggedIn} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
