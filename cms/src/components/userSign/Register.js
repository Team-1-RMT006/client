import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import {SuccesAlert, WarningAlert, ErrorAlert} from '../Alert/Alert'
import axios from 'axios';


function Register ({loggedIn}) {
  const history = useHistory();
  useEffect(()=>{
    if(loggedIn){
      history.push('/');
    }
  }, [loggedIn, history]);

  const successNotif = (m) => {
    toast.success(<SuccesAlert message={m}/>);
  }
  const warningNotif = (m) => {
    toast.error(<WarningAlert message={m}/>);
  }
  const errorNotif = (m) => {
    toast.error(<ErrorAlert message={m}/>);
  }

  const [inputUser, setInputUser] = useState({
    name: '',  
    email: '',   
    password: '',
    address: '',
    phone: ''
  })

  function handleRegister () {
    axios({
      method: "POST",
      url: "https://creativent-app.herokuapp.com/organizers/register",
      data: {
        name: inputUser.name,  
        email: inputUser.email,   
        password: inputUser.password,
        address: inputUser.address,
        phone: inputUser.phone
      }
    }).then(response=>{
      successNotif("You Can Login With Your New Account Now!")
      history.push('/login');
    }).catch(err => {
      if(err.response.status === 400) {
        for(let i = 0; i < err.response.data.message.length; i++){
          warningNotif(`${err.response.data.message[i]}`);
        }
      } else {
        errorNotif(`${err.response.data.message}`);
      }
    })
  }

  return (
    <div className="w-screen lg:w-4/5 h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500">
            <img className="w-full h-full" src="https://images.creativemarket.com/0.1.0/ps/8573503/600/400/m2/fpnw/wm0/collective-virtual-video-call-1-.jpg?1592651608&s=4db87b1f3b550ac7077c6258adc5bf70" alt="img"></img>
          </div>
          <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
            <div className="text-center">
              <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
              <p>Enter your information to create a new account</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3">
                  <label htmlFor="" className="text-xs font-semibold px-1">Organizer Name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>  
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="Your Organization or Personal Name" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, name: e.target.value})
                      }}/>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-3">
                  <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <input 
                      type="email" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="john@example.com" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, email: e.target.value})
                      }}/>
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-3">
                  <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input 
                      type="password" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="************" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, password: e.target.value})
                      }}
                      />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3">
                  <label htmlFor="" className="text-xs font-semibold px-1">Phone</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="+62 1234 567" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, phone: e.target.value})
                      }}
                      />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="text-xs font-semibold px-1">Adress</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                      placeholder="Jl. Kenari pagi No.12" 
                      onChange={(e)=>{
                        setInputUser({...inputUser, address: e.target.value})
                      }}
                      />
                  </div>
                </div>
              </div>
              <div className="text-center mb-3 text-blue-500 hover:text-blue-700">
                <Link to ="/login">Already have an account?</Link>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button 
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={(e)=>{
                      e.preventDefault();
                      handleRegister();
                    }}
                    >REGISTER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;