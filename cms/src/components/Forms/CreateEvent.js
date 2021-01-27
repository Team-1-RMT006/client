import {useState} from 'react';
import { toast } from 'react-toastify';
import {SuccesAlert, ErrorAlert} from '../Alert/Alert'
import {CreateNewEvent} from '../../hooks/ApiRequest';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchEventsByOrganizer, fetchEventsByStatus} from '../../store/actions'

function CreateEvent({handleCreateForm}) {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    OrganizerId: 1,
    title: '',
    date: '',
    time: '00:00',
    location: '',
    capacity_regular: 0,
    capacity_vip: 0,
    capacity_vvip: 0,
    price_regular: 0,
    price_vip: 0,
    price_vvip: 0,
    event_preview: 'https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg',
    EventTypeId: 1
  })
  const [isAdmin] = useState(localStorage.getItem('isAdmin'));
  const eventType = useSelector(state => state.eventReducer.eventsType);
  const organizerList = useSelector(state => state.organizersReducer.organizers);
  const [checkedType, setcheckedType] = useState({
    regular: false,
    vip: false,
    vvip: false
  })
  const successNotif = (m) => {
    toast.success(<SuccesAlert message={m}/>);
  }
  const errorNotif = (m) => {
    toast.success(<ErrorAlert message={m}/>);
  }
  function handleCreateEvent () {
    CreateNewEvent(inputData, checkedType, isAdmin)
      .then((response)=>{
        console.log(response);
        handleCreateForm();
        dispatch(fetchEventsByStatus());
        dispatch(fetchEventsByOrganizer());
        successNotif();
      })
      .catch((err)=>{
        console.log(err.response.data)
        if(err.response.status === 400) {
          for(let i = 0; i < err.response.data.message.length; i++){
            errorNotif(`${err.response.data.message[i]}`);
          }
        } else {
          errorNotif(`${err}`)
        }
      })
  }
  return (
    <div className="sm:h-10 md:h-20 lg:h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="px-10 mt-2 flex flex-row justify-end items-center text-center">
          <div className="flex items-end">
            <button 
              className="text-red-400 hover:text-red-500 focus:outline-none"
              onClick={(e)=>{
                e.preventDefault();
                handleCreateForm();
              }}
              >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
          </div>
        </div>
        <div className="md:flex justify-center items-center w-full">

          {/* *********** LEFT SIDE FORM *************** */}
          <div className="sm:w-full lg:w-1/2 px-5 md:px-10">
            <form>
              <div className="flex -mx-3">
                <div className="flex justify-center w-full px-3 mb-2">
                  <h1 className="font-bold text-3xl text-gray-900">Create New Event</h1>
                </div>
              </div>
              { isAdmin === 'true' ? 
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Organizer Name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <select 
                      value={inputData.OrganizerId}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e)=>{
                        setInputData({...inputData, OrganizerId: e.target.value})
                      }}>
                        {
                          organizerList.map(organizer => {
                            return (
                              <option value={organizer.id}>{organizer.name}</option>
                            )
                          })
                        }
                    </select>
                  </div>
                </div>
              </div>
              :
              ''}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Event Name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      value={inputData.title}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, title: e.target.value})
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Date</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <input 
                      type="date" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      value={inputData.date}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, date: e.target.value})
                      }}/>
                  </div>
                </div>
                <div className="w-1/2 pr-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Time</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <input 
                      type="time" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      value={inputData.time}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, time: e.target.value})
                      }}/>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="flex justify-center w-full px-3 mb-2">
                  <img 
                    className="max-h-36"
                    src={inputData.event_preview}
                    alt="preview"
                  ></img>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Poster</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <input 
                      type="file" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e)=>{
                        const formdata = new FormData();
                        formdata.append("image", e.target.files[0])
                        fetch("https://api.imgur.com/3/image/",{
                          method: "post",
                          headers:{
                            Authorization:"Client-ID 5e4828f8131b686"
                          },
                          body: formdata
                        }).then(response =>{
                          return response.json()
                        }).then(data => {
                          if(data.success){
                            setInputData({...inputData, event_preview: data.data.link})
                          } else {
                            setInputData({...inputData, event_preview: "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"})
                          }
                        }).catch(err =>{
                          console.log('masuk ke error bos')
                          console.log(err);
                        })
                      }} />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* *********** RIGHT SIDE FORM *************** */}
          <div className="sm:w-full lg:w-1/2 px-5 md:px-10">
            <form>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Location</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      value={inputData.location}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, location: e.target.value})
                      }}/>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full">
                  <label htmlFor="" className="text-xl font-semibold px-1">Audience Type</label>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full">
                  <input 
                      type="checkbox"
                      className="ml-3"
                      checked={checkedType.regular}
                      value={checkedType.regular}
                      onChange={(e)=>{
                        const newCheck = !checkedType.regular;
                        if(!newCheck){
                          setInputData({...inputData, price_regular: 0, capacity_regular: 0});
                        }
                        setcheckedType({...checkedType, regular: newCheck})
                      }}
                    ></input>
                  <label htmlFor="" className="text-lg font-semibold px-1">Regular</label>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Ticket Price</label>
                  <div className="flex flex-row">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="20000" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" 
                      value={inputData.price_regular}
                      readOnly={!checkedType.regular}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, price_regular: e.target.value});
                      }}
                      />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Regular Capacity</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="50" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" 
                      value={inputData.capacity_regular}
                      readOnly={!checkedType.regular}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, capacity_regular: e.target.value});
                      }}
                      />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full">
                  <input 
                      type="checkbox"
                      className="ml-3"
                      checked={checkedType.vip}
                      value={checkedType.vip}
                      onChange={(e)=>{
                        const newCheck = !checkedType.vip;
                        if(!newCheck){
                          setInputData({...inputData, price_vip: 0, capacity_vip: 0});
                        }
                        setcheckedType({...checkedType, vip: newCheck})
                      }}
                    ></input>
                  <label htmlFor="" className="text-lg font-semibold px-1">VIP</label>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">VIP Ticket Price</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="20000"
                      value={inputData.price_vip}
                      readOnly={!checkedType.vip}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, price_vip: e.target.value});
                      }}
                      />
                  </div>
                </div>
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">VIP Capacity</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="50" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      value={inputData.capacity_vip}
                      readOnly={!checkedType.vip}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, capacity_vip: e.target.value});
                      }} />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full">
                  <input 
                      type="checkbox"
                      className="ml-3"
                      checked={checkedType.vvip}
                      value={checkedType.vvip}
                      onChange={(e)=>{
                        const newCheck = !checkedType.vvip;
                        if(!newCheck){
                          setInputData({...inputData, price_vvip: 0, capacity_vvip: 0});
                        }
                        setcheckedType({...checkedType, vvip: newCheck})
                      }}
                    ></input>
                  <label htmlFor="" className="text-lg font-semibold px-1">VVIP</label>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">VVIP Ticket Price</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="20000" 
                      value={inputData.price_vvip}
                      readOnly={!checkedType.vvip}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, price_vvip: e.target.value});
                      }}
                      />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">VVIP Capacity</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <input 
                      type="number" 
                      min="0" step="50" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={inputData.capacity_vvip}
                      readOnly={!checkedType.vvip}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputData({...inputData, capacity_vvip: e.target.value});
                      }}
                      />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Event Type</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <select 
                      value={inputData.EventTypeId}
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e)=>{
                        setInputData({...inputData, EventTypeId: e.target.value})
                      }}>
                        {
                          eventType.map(type => {
                            return (
                              <option value={type.id}>{type.name}</option>
                            )
                          })
                        }
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full px-3 mb-5">
          <button
            type="submit"
            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            onClick={(e)=>{
              e.preventDefault();
              handleCreateEvent();
            }}
            >Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent;