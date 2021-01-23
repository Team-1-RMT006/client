import Navigation from './Navigation.js'
import {Link} from 'react-router-dom';

function Sidebar ({loggedIn, setLoggedIn}) {
  return (
    <div className="w-1/5 h-screen bg-gray-800 sm:mt-0">
      <div className="flex items-center justify-center mt-10">
        <img className="h-6" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-light.svg" alt=""></img>
      </div>
      <nav className="mt-10">
        <Navigation />
      </nav>
      <div className="absolute bottom-0 my-10">
      {
          loggedIn ?
              <button 
                onClick={(e)=>{
                  e.preventDefault();
                  setLoggedIn(false);
                }}>
                <Link 
                  className="flex items-center py-2 px-8 text-gray-500 hover:text-gray-400" 
                  to="/login">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  <span className="mx-4 font-medium">Logout</span>
                </Link>
              </button>
            :
              <Link 
                className="flex items-center py-2 px-8 text-gray-500 hover:text-gray-400" 
                to="/login">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                <span className="mx-4 font-medium">Login</span>
              </Link>
        }
      </div>
    </div>
  )   
}

export default Sidebar;