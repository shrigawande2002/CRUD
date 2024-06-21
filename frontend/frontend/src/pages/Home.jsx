import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
  
    <div className="bg-cover bg-center h-screen flex items-center justify-center bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230930/pngtree-web-development-concept-programming-and-coding-illustrated-in-3d-image_13511770.png')]">
      <div className="flex items-center gap-4">
        <Link to="/insert">
          <button className="bg-red-600 text-white rounded-md p-3 w-32">Insert</button>
        </Link>
        <Link to="/show">
          <button className="bg-blue-600 text-white rounded-md p-3 w-32">View Data</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
