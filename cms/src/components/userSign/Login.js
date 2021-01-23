import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Login ({loggedIn}) {
  const history = useHistory();
  useEffect(()=>{
    if(loggedIn){
      history.push('/');
    }
  }, [loggedIn, history]);
 
  return ( 
    <div className="w-4/5 h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
        <div className="md:flex w-full">
          <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
            <div className="text-center mb-5">
                <h1 className="font-bold text-3xl text-gray-900">Sign In</h1>
                <p>Sign-in and start organize your event!</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3 mt-10">
                  <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="john@example.com" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-3 mt-5 mb-10">
                  <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                  </div>
                </div>
              </div>
              <div className="text-center mb-3 mt-3 text-blue-500 hover:text-blue-700">
                <Link to ="/register">Doesn't have account?</Link>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LOGIN</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/2 bg-indigo-500">
            <img className="w-full h-full" src="https://www.beat.com.au/wp-content/uploads/2019/12/IMG_4354-e1576713436663.jpg" alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
