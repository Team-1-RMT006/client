import {useState} from 'react';
import {AddNewEventType} from '../../hooks/ApiRequest';
import { toast } from 'react-toastify';
import {SuccesAlert, ErrorAlert} from '../Alert/Alert'
import {useDispatch} from 'react-redux';
import {fetchEventsType} from '../../store/actions'

function NewEventType ({handleAddNewType}) {
  const dispatch = useDispatch();
  const [inputUser, setInputUser] = useState({
    eventType: ''
  });
  const successNotif = (m) => {
    toast.success(<SuccesAlert message={m}/>);
  }

  const errorNotif = (m) => {
    toast.error(<ErrorAlert message={m}/>);
  }
  function handlePost(){
    AddNewEventType(inputUser)
      .then((response) => {
        console.log(response);
        successNotif(`'${response.data.name}' Has Been Added`)
        dispatch(fetchEventsType());
        handleAddNewType();
      })
      .catch((err) => {
        errorNotif(`${err}`);
      })
  }
  return (
    <div className="h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="md:flex w-full">
          <div className="w-full py-5 px-5 md:px-10">
            <div className="flex items-end justify-end">
              <button 
                className="text-red-400 hover:text-red-500 focus:outline-none"
                onClick={(e)=>{
                  e.preventDefault();
                  handleAddNewType();
                }}
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
            <div className="text-center mb-5">
              <h1 className="font-bold text-3xl text-gray-900">Add New Event Type</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Detail</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="e.g Kondangan" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, eventType: e.target.value})
                      }}/>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button 
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={(e)=>{
                      e.preventDefault();
                      handlePost();
                    }}
                    >Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEventType;