import Table from '../Table/Table'
import {useState, useEffect} from 'react'
import CreateEvent from '../Forms/CreateEvent'
import {useHistory} from 'react-router-dom'
function Dashboard ({loggedIn}) {
  const history = useHistory();
  useEffect(()=>{
    if(!loggedIn){
      history.push('/login');
    }
  }, [loggedIn, history]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  function handleCreateForm(){
    setShowCreateForm(!showCreateForm);
  }
  return (
    <div className="flex flex-col h-screen w-4/5 bg-gray-900">
      <div className="flex justify-end">
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
      <div className="flex-grow overflow-auto">
        <Table />
      </div>
      {
        showCreateForm ? 
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
          <CreateEvent handleCreateForm={handleCreateForm}/>
        </div> : ''
      }
    </div>
  )
}

export default Dashboard;