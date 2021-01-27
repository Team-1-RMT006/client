import {RemoveBanner} from '../../hooks/ApiRequest'
import {useDispatch} from 'react-redux';
import { fetchBanner } from '../../store/actions';
import { toast } from 'react-toastify';
import {SuccesAlert, ErrorAlert} from '../Alert/Alert'


function DeleteConfirmation ({handleDelete, id}) {
  const dispatch = useDispatch();

  const successNotif = (m) => {
    toast.success(<SuccesAlert message={m}/>);
  }
  const errorNotif = (m) => {
    toast.error(<ErrorAlert message={m}/>);
  }

  function confirmDelete () {
    RemoveBanner(id)
      .then(response => {
        successNotif(response.data.message);
        dispatch(fetchBanner());
        handleDelete();
      })
      .catch(err => {
        if(err.response.status === 401){
          errorNotif(`${err.response.data.message}`)
        } else {
          errorNotif(`${err}`);
        }
      })
  }

  function cancelDelete () {
    handleDelete();
  }
  
  return (
    <div className="h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="md:flex w-full">
          <div className="w-full py-5 px-5 md:px-10">
            <div className="text-center mb-5">
              <h1 className="font-bold text-3xl text-gray-900">Are you sure want to delete this banner?</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <button 
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={(e)=>{
                      e.preventDefault();
                      confirmDelete();
                    }}
                    >Confirm</button>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <button 
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={(e)=>{
                      e.preventDefault();
                      cancelDelete();
                    }}
                    >Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation;