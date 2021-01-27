import {Link} from 'react-router-dom';
import {useState} from 'react';
function Navigation () {
  const [isAdmin] = useState(localStorage.getItem('isAdmin'));
  console.log(isAdmin);
  return (
    <>
      { isAdmin === 'true' ? 
        <Link 
          className="flex items-center py-2 px-8 hover:bg-gray-700 text-gray-400 hover:text-gray-100 border-gray-800 border-r-4 hover:border-gray-100" 
          to="/">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span className="mx-4 font-medium">Home</span>
        </Link> : ''
      }

      {
        isAdmin === 'true' ? '' :
        <Link 
          className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
          to="/event">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
          <span className="mx-4 font-medium">My Event</span>
        </Link>
      }

      {
        isAdmin === 'true' ?
        <Link 
          className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
          to="/banner">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
          <span className="mx-4 font-medium">Banner</span>
        </Link>
        :
        ''
      }
    </>
  )
}

export default Navigation;