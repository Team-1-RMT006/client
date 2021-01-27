import TableEvent from './TableEvent';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import CreateEvent from '../Forms/CreateEvent';
import Loader from '../Modals/Loader';
import { fetchEventsByOrganizer } from '../../store/actions';


function MyEvent ({loggedIn}) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!loggedIn){
      history.push('/login');
    }
  }, [loggedIn, history]);

  useEffect(()=>{
    dispatch(fetchEventsByOrganizer());
  }, [])

  const loading = useSelector(state => state.eventReducer.loading);
  console.log(loading, 'Ini loadingnya');
  const myEvent = useSelector(state => state.eventReducer.eventsByOrganizer);
  const [selectedEvents, setSelectedEvents] = useState(null);
  function handleSelectedEvents (selected) {
    if(selectedEvents === selected) {
      setSelectedEvents(null);
    } else {
      setSelectedEvents(selected)
    }
  }
  function renderSelected (selectedStatus) {
    for(let i = 0; i < myEvent.length; i++){
      if(myEvent[i].name === selectedStatus){
        const listSelected = [myEvent[i]]
        console.log(listSelected, 'Ini di select')
        return (
          <div className="flex-grow overflow-auto">
            <TableEvent 
              myEvent={listSelected}/>
          </div>
        )
      }
    }
    return (
      <div className="flex-grow overflow-auto">
        <TableEvent 
          myEvent={myEvent}/>
      </div>
    )
  }

  const [showCreateForm, setShowCreateForm] = useState(false);
  function handleCreateForm(){
    setShowCreateForm(!showCreateForm);
  }
  console.log(myEvent);
  if(loading) {
    return (
      <div className="flex flex-col h-screen w-4/5 bg-gray-900">
        <Loader />
      </div>
    )
  } 
  else {
    return (
      <div className="flex flex-col h-screen w-4/5 bg-gray-900">
        <div className="flex flex-row justify-between">
          <div className="flex">
            <div className="m-3">
              <button 
                className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={(e)=>{
                  e.preventDefault();
                  handleSelectedEvents('active')
                }}
                >
                <span className="mr-2">Ongoing</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </button>
            </div>
            <div className="m-3">
              <button 
                className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={(e)=>{
                  e.preventDefault();
                  handleSelectedEvents('non-active')
                }}
                >
                <span className="mr-2">Finished</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"></path>
                </svg>
              </button>
            </div>
            <div className="m-3">
              <button 
                className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={(e)=>{
                  e.preventDefault();
                  handleSelectedEvents('cancelled')
                }}
                >
                <span className="mr-2">Canceled</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="m-3">
              <button 
                className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={(e)=>{
                  e.preventDefault();
                  handleCreateForm();
                }}
                >
                <span className="mr-2">Create New Event</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {myEvent.length ? renderSelected(selectedEvents) : ''}
        {
          showCreateForm ? 
          <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
            <CreateEvent handleCreateForm={handleCreateForm}/>
          </div> : ''
        }
      </div>
    )
  }
}

export default MyEvent;