import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Show() {
  const [data, setData] = useState([]); 
  const GetUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  const DeleteUSer = (id)=>{
    try{
         axios.delete(`http://localhost:8000/delete/${id}`)
         alert(` You want to Delete the user`)
         setData(data.filter( user => user._id !== id))
     
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {data.length > 0 ? (
        data.map((user, index) => (
          <div key={index} className="shadow-lg w-[25rem] mt-8 p-4 bg-white rounded-md">
            <h2 className='m-2 font-medium'>id: {index}</h2>
            <h2 className='m-2'>Name: {user.name}</h2>
            <h2 className='m-2'>City: {user.address}</h2>
            <h2 className='m-2'>Phone: {user.phone}</h2>
            <div className="flex justify-around mt-4">
              <button className='bg-green-600 p-2 w-20 rounded-md text-white font-bold'>Update</button>
              <button className='bg-red-600 p-2 w-20 rounded-md text-white font-bold' onClick={()=>DeleteUSer(user._id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Show;
