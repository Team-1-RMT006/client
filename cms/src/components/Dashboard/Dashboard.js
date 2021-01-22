import Table from '../Table/Table'

function Dashboard () {
  return (
    <div className="flex flex-col h-screen w-4/5 bg-gray-900">
      <div className="flex justify-center">
        <div className="m-3">
          <button className="bg-white text-gray-800 font-bold focus:outline-none rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mr-2">Create New Event</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
         </div>
      </div>
      <div className="flex-grow overflow-auto">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard;