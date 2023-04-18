import React from 'react'

const Footer = () => {
  return (
   <>
    <footer className=" bg-dark-purple text-white px-4 py-8 h-30" >
  <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="https://images.unsplash.com/photo-1491396023581-4344e51fec5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNodXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        alt="Logo"
        className="w-24 h-auto mb-4 md:mb-0 md:mr-4"
      />
      <div>
        <p className="font-bold"> ACK St. Paul's</p>
        <p className="text-gray-400">Langata, Nairobi</p>
      </div>
    </div>
    <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors duration-200 mx-4"
      >
        Facebook
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors duration-200 mx-4"
      >
        Twitter
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-white transition-colors duration-200 mx-4"
      >
        Instagram
      </a>
    </div>
  </div>
  <div className="max-w-screen-lg mx-auto mt-4 text-gray-400 text-center">
    <p>&copy; 2023 St. Paul's Church. All rights reserved.</p>
  </div>
</footer>
   </>
  )
}

export default Footer