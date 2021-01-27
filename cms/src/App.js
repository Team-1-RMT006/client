import {
  Switch,
  Route
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/userSign/Login';
import Register from './components/userSign/Register';
import EventDetail from './components/Details/EventDetail';
import MyEvent from './components/MyEvent/MyEvent';
import Banner from './components/Banner/Banner';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from 'react-redux'
import {fetchEventsType, fetchOrganizerList} from './store/actions'


toast.configure();
function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(()=>{
    dispatch(fetchEventsType());
  }, [])

  useEffect(()=>{
    dispatch(fetchOrganizerList());
  }, [])

  useEffect(()=>{
    if(localStorage.getItem('access_token')){
      setLoggedIn(true);
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
            <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/detail/:id" loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
            <EventDetail />
          </Route>
          <Route exact path="/event">
            <MyEvent loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/banner">
            <Banner loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/login">
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/register">   
            <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
