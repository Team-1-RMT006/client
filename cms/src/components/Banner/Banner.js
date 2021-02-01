import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import DeleteBannerConfirmation from '../Modals/DeleteBannerConfirmation'
import BannerList from './BannerList';
import EditBanner from '../Forms/EditBanner';
import AddBanner from '../Forms/AddBanner';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchBanner} from '../../store/actions';
import Loader from '../Modals/Loader';

function Banner ({loggedIn}) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('access_token')){
      if(localStorage.getItem('isAdmin') === 'false') {
        history.push('/');
      }
    }
  }, [loggedIn, history]);

  useEffect(()=>{
    dispatch(fetchBanner());
  }, [])


  const [toDelete, setToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function handleDelete(value = null){
    setShowDeleteModal(!showDeleteModal);
    setToDelete(value);
  }

  const [toEdit, setToEdit] = useState(null);
  const [showEditBanner, setShowEditBanner] = useState(false);
  function handleEditBanner(value = null){
    setShowEditBanner(!showEditBanner);
    setToEdit(value);
  }

  const [showCreateForm, setShowCreateForm] = useState(false);
  function handleAddForm(){
    setShowCreateForm(!showCreateForm);
  } 

  const banner = useSelector(state => state.bannerReducer.banners);
  const loading = useSelector(state => state.bannerReducer.loading);

  // if(loading) {
  //   return (
  //     <div className="flex flex-col h-screen w-4/5 bg-gray-900">
  //       <Loader />
  //     </div>
  //   )
  // }
  return (
    <div className="flex flex-col h-screen w-4/5 bg-gray-900">
      <div className="flex justify-end">
        <div className="m-3">
          <button 
            className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={(e)=>{
              e.preventDefault();
              handleAddForm();
            }}
            >
            <span className="mr-2">Add New Banner</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
         </div>
      </div>
      {
        loading ? 
        <div className="flex flex-col h-screen bg-gray-900 justify-center items-center">
          <i className="fa fa-picture-o text-8xl text-gray-100" aria-hidden="true"></i>
          <div className="text-3xl text-gray-100 font-bold">There is still no Banner</div>
        </div> :
          <div className="flex-grow overflow-auto">
          <table className="relative w-full">
            <thead>
              <tr>
                <th className="w-2/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">Image</th>
                <th className="w-1/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">Detail</th>
                <th className="w-1/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y bg-gray-100">
              {
                banner.map(banner => {
                  return (
                    <BannerList 
                      key={banner.id} 
                      banner={banner}
                      handleEditBanner={handleEditBanner}
                      handleDelete={handleDelete} />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
      {
        showEditBanner ? 
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
          <EditBanner 
            handleEditBanner={handleEditBanner} 
            populateData={toEdit}
            />
        </div> : ''
      }
      {
        showDeleteModal ?
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
          <DeleteBannerConfirmation handleDelete={handleDelete} id={toDelete} />
        </div> : ''
      }
      {
        showCreateForm ? 
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items center">
          <AddBanner handleAddForm={handleAddForm}/>
        </div> : ''
      }
    </div>
  )
}

export default Banner;