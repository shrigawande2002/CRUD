import React from 'react'

function Card({onSubmit, name, setName, address , setAdress, phone , setPhone}) {
  return (
    <>
    <form onSubmit={onSubmit} className='text-center w-96 m-auto flex flex-col gap-3 mt-16'>
       <div className="container flex flex-col text-center justify-center gap-3">
            <input type="text" placeholder='Enter Name'className='outline-none border-2 rounded-lg' onChange={ (e)=>{setName(e.target.value)}} value={name}/>

            <input type="text"  placeholder='Enter city' className='outline-none border-2 rounded-lg' onChange={(e)=>{ setAdress(e.target.value)}} value={address}/>

            <input type="text"  placeholder='Enter Phone'className='outline-none border-2 rounded-lg' onChange={(e)=> { setPhone(e.target.value)}} value={phone}/>
       </div>
        <button className='bg-black text-white font-bold w-20 ml-28 rounded-lg '>Submit</button>
       </form>
    </>
  )
}

export default Card
