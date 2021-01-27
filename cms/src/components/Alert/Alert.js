export function SuccesAlert ({message}) {
  return (
    <div 
      className="inline-flex items-center leading-none text-gray-100 rounded-full p-2 text-sm">
      <span 
        className="inline-flex text-white rounded-full h-6 px-3 justify-center items-center"
        style={{backgroundColor: "#28df99"}}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
      </span>
      <span className="inline-flex px-2 text-sm font-bold">{message ? message : 'Success!'}</span>
    </div>
   )
}


export function WarningAlert ({message}) {
  return (
    <div 
      className="inline-flex items-center leading-none text-gray-100 rounded-full p-2 text-sm">
      <span 
        className="inline-flex text-white rounded-full h-6 px-1 justify-center items-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </span>
      <span className="inline-flex text-sm font-bold">{message ? message : 'Success!'}</span>
    </div>
  )
}

export function ErrorAlert ({message}) {
  return (
    <div 
      className="inline-flex items-center leading-none text-gray-100 rounded-full p-2 text-sm">
      <span 
        className="inline-flex text-white rounded-full h-6 px-1 justify-center items-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </span>
      <span className="inline-flex text-sm font-bold">{message ? message : 'Success!'}</span>
    </div>
  )
}