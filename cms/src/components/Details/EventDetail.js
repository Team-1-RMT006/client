function EventDetail (){
  return (
    <div className="flex flex-col h-screen w-full bg-gray-900">
      <div className="flex flex-row h-1/5">
          <img 
            className="w-1/3"
            src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg"
            alt="bagus euy">
          </img>
          <div className="w-1/3 h-full flex flex-col items-start justify-end">
            <div className="text-xl text-gray-100">Nama Organizer</div>
            <div className="text-5xl text-gray-100">Nama Event</div>
          </div>
      </div>
      <div className="flex-grow overflow-auto">
        <table className="relative w-full">
          <thead>
            <tr>
              <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Buyer</th>
              <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Order</th>
              <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Transaction</th>
              <th className="sticky top-0 px-6 py-3 text-gray-100 bg-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-red-100">
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
              <td className="px-6 py-4 text-center">Column</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventDetail;