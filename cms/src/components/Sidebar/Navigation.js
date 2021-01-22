import {Link} from 'react-router-dom'

function Navigation () {
  return (
    <nav className="mt-10">
      <Link 
        className="flex items-center py-2 px-8 hover:bg-gray-700 text-gray-400 hover:text-gray-100 border-gray-800 border-r-4 hover:border-gray-100" 
        to="/">
        <span className="mx-4 font-medium">Home</span>
      </Link>

      <Link 
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
        to="/login">
        <span className="mx-4 font-medium">Login</span>
      </Link>

      <Link 
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
        to="/register">
        <span className="mx-4 font-medium">Register</span>
      </Link>

      <Link 
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
        to="/event/active">
        <span className="mx-4 font-medium">Event Active</span>
      </Link>

      <Link 
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
        to="/event/completed">
        <span className="mx-4 font-medium">Event Completed</span>
      </Link>

      <Link 
        className="flex items-center mt-5 py-2 px-8 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" 
        to="/event/canceled">
        <span className="mx-4 font-medium">Event Canceled</span>
      </Link>
    </nav>
  )
}

export default Navigation;