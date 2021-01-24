import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import DeleteConfirmation from '../Modals/DeleteConfirmation'
import BannerList from './BannerList';
import EditBanner from '../Forms/EditBanner';
import AddBanner from '../Forms/AddBanner';

function Banner ({loggedIn}) {
  const history = useHistory();
  useEffect(()=>{
    if(!loggedIn){
      history.push('/');
    }
  }, [loggedIn, history]);

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

  const [bannerData, setBannerData] = useState([
    {
      id: 1,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: 'Milik Organisasi A'
    },
    {
      id: 2,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: 'Milik Organisasi B'
    },{
      id: 3,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: null
    },
    {
      id: 4,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: null
    },
    {
      id: 5,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: 'PROMO NIH'
    },
    {
      id: 6,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: 'Yoi mantap'
    },
    {
      id: 7,
      image_url: 'https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/53/9556248b4747950.png',
      detail: 'Pengen ganti kibod'
    }
  ])
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
      <div className="flex-grow overflow-auto">
        <table class="relative w-full">
          <thead>
            <tr>
              <th class="w-2/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">Image</th>
              <th class="w-1/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700">Detail</th>
              <th class="w-1/4 sticky top-0 px-6 py-3 text-gray-100 bg-gray-700"></th>
            </tr>
          </thead>
          <tbody class="divide-y bg-gray-100">
            {
              bannerData.map(banner => {
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
          <DeleteConfirmation handleDelete={handleDelete} id={toDelete} />
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