function BannerList({banner, handleEditBanner, handleDelete}){
  return (
    <tr>
      <td class="px-6 py-4 text-center">
        <img src={banner.image_url} alt="gambarBanner"></img>
      </td>
      <td class="px-6 py-4 text-center">{banner.detail}</td>
      <td class="px-6 py-4 text-center">
        <button 
          className="w-full bg-white ml-2 mt-2 text-gray-800 font-bold focus:outline-none rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
          onClick={(e)=>{
            e.preventDefault();
            handleEditBanner(banner);
          }}
          >
          <span className="mr-2">Edit</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
        </button>
        <button 
          className="w-full bg-white ml-2 mt-2 mb-4 text-gray-800 font-bold focus:outline-none rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center justify-center"
          onClick={(e)=>{
            e.preventDefault();
            handleDelete(banner.id);
          }}
          >
          <span className="mr-2">Delete</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default BannerList;