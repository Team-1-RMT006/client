import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {GetDetail} from '../../hooks/ApiRequest'
import Loader from '../Modals/Loader';

function EventDetail (){
  const id = useParams().id;
  const [DetailEvent, setDetailEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    GetDetail(id)
      .then(response => {
        setDetailEvent(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  
  return (
    <div className="flex flex-col h-screen w-full bg-gray-900">
      {
        loading ? <Loader /> :
        <>
          <div className="flex flex-row h-1/4 p-2">
            <img 
              className="w-1/4"
              src={DetailEvent?.event_preview}
              alt="bagus euy">
            </img>
            <div className="w-2/4 h-full flex flex-col items-start justify-end">
              <div className="text-2xl text-gray-100 ml-3">{DetailEvent?.Organizer?.name}</div>
              <div className="text-5xl text-gray-100 ml-2">{DetailEvent?.title}</div>
            </div>
          </div>
          <div className="flex-grow overflow-auto">
              {
                DetailEvent?.Tickets?.length ?
                <table className="relative w-full">
                  <thead>
                    <tr>
                      <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Customer ID</th>
                      <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Order</th>
                      <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Type</th>
                      <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-red-100">
                    {
                      DetailEvent.Tickets.map(ticket => {
                        return (
                          <tr key={ticket.id}>
                            <td className="px-6 py-4 text-center">{ticket.CustomerId}</td>
                            <td className="px-6 py-4 text-center">{new Date(ticket.createdAt).toString().split('GMT')[0]}</td>
                            <td className="px-6 py-4 text-center">{ticket.class.toUpperCase()}</td>
                            <td className="px-6 py-4 text-center">{ticket.status.toUpperCase()}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table> : 
                <div className="flex flex-col justify-center items-center w-full h-full bg-gray-600">
                  <i className='fas fa-user-alt text-5xl'></i>
                  <div className="text-3xl text-gray-100 font-bold">There is still no audience for this Event</div>
                </div>
              }
          </div>
      </>
      }
    </div>
  )
}

export default EventDetail;