import {useHistory} from 'react-router-dom';

function TableBody({event, handleEditForm, handleDelete}) {
  const history = useHistory();
  function handleDetail(){
    history.push(`/detail/${event.id}`)
  }
  console.log(event);
  return (
    <>
    <tr className="border-8">
      <td className="w-1/3 pl-2">
        <img
          className="hidden md:block w-full" 
          src={event.event_preview}
          alt="bagus euy">
        </img>
      </td>
      <td className="ml-4 flex flex-col justify-between justify-center">
        <div className="text-2xl">{event.title}</div>
        <div className="text-lg">{`on ${new Date(event.date).toString().split('07')[0]} ${event.time}`}</div>
          <div className="flex mt-5">
            <svg className="h-7 w-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Released : {event.capacity_regular + event.capacity_vip + event.capacity_vip}</p>
          </div>
          <div className="flex my-5">
            <svg className="h-7 w-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Sold : {event.Tickets.length}</p>
          </div>
          <div className="flex">
            <svg className="h-7 w-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Available : {(event.capacity_regular + event.capacity_vip + event.capacity_vip) - (event.Tickets.length)}</p>
          </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex flex-col">
          <button 
            className="bg-white ml-2 text-gray-800 font-bold focus:outline-none rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            onClick={(e)=>{
              e.preventDefault();
              handleDetail();
            }}
            >
            <span className="mr-2">Details</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
          </button>
          <button 
            className="bg-white ml-2 mt-2 text-gray-800 font-bold focus:outline-none rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            onClick={(e)=>{
              e.preventDefault();
              handleEditForm(event);
            }}
            >
            <span className="mr-2">Edit</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
          </button>
          <button 
            className="bg-white ml-2 mt-2 mb-4 text-gray-800 font-bold focus:outline-none rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
            onClick={(e)=>{
              e.preventDefault();
              handleDelete(event.id);
            }}
            >
            <span className="mr-2">{localStorage.getItem('isAdmin') === 'true' ? 'Delete' : 'Cancel'}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
    </>
  )
}

export default TableBody