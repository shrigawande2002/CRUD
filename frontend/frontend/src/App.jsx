import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Card from './component/Card'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (e)=>{
    e.preventDefault();

    try{

      const {data}= await axios.post('http://localhost:8000/insert',{ name,address,phone});
      alert("User added successfully");
      navigate('/')

    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
        <Card onSubmit={onSubmit} name={name} setName={setName} address={address} setAdress={setAdress} phone={phone} setPhone={setPhone}/>
    </>
  )
}

export default App
