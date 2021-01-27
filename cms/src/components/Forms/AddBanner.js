import {useState} from 'react';
import {AddNewBanner} from '../../hooks/ApiRequest'
import { toast } from 'react-toastify';
import {SuccesAlert, ErrorAlert} from '../Alert/Alert'
import {useDispatch} from 'react-redux';
import {fetchBanner} from '../../store/actions';


function AddBanner ({handleAddForm}) {
  const dispatch = useDispatch();
  const [inputUser, setInputUser] = useState({
    banner: 'https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg',
    detail: ''
  });
  const successNotif = (m) => {
    toast.success(<SuccesAlert message={m}/>);
  }
  const errorNotif = (m) => {
    toast.success(<ErrorAlert message={m}/>);
  }

  console.log(inputUser);

  function handleAddBanner () {
    const payload = {
      image_url: inputUser.banner,
      detail: inputUser.detail
    }

    AddNewBanner(payload)
      .then(response => {
        successNotif('New Banner Has Been Added');
        dispatch(fetchBanner());
        handleAddForm();
      })
      .catch(err => {
        errorNotif(`${err.response.data.message}`)
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
                  handleAddForm();
                }}
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
            <div className="text-center mb-5">
              <h1 className="font-bold text-3xl text-gray-900">Add New Banner</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <div className="flex justify-center">
                    <img 
                      className="max-h-64"
                      src={inputUser.banner}
                      alt="preview"
                    ></img>
                  </div>
                  <label htmlFor="" className="text-xs font-semibold px-1">Image</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <input 
                      type="file" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e)=>{
                        console.log(e.target.files[0])
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
                            setInputUser({...inputUser, banner: data.data.link})
                          } else {
                            setInputUser({...inputUser, banner: "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"})
                          }
                        }).catch(err =>{
                          console.log('masuk ke error bos')
                          console.log(err);
                        })
                      }} />
                  </div>
                </div>
              </div>
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
                      placeholder=""
                      value={inputUser.detail}
                      onChange={(e)=>{
                        e.preventDefault();
                        setInputUser({...inputUser, detail: e.target.value})
                      }} />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button 
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={(e)=>{
                      e.preventDefault();
                      handleAddBanner();
                    }}
                    >Add New Banner
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

export default AddBanner