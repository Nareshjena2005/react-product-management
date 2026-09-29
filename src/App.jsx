import React, { useState } from 'react'
import Navvbr from './components/Navvbr'
import UserCard from './components/UserCard'
import From from './components/From'

const App = () => {
  let [toggle,setToggle]=useState(false);
  const [formData,setFormData]=useState(()=>{
    return JSON.parse(localStorage.getItem("detailProduct"))||[]
  });
  const deletFunction = (id)=>{
    const filterData = formData.filter((val)=>{
      return val.id!==id;
    })
    setFormData(filterData);
    localStorage.setItem("detailProduct",JSON.stringify(filterData));
    
  }
  const[updateData,setUpdateData]=useState(null);
  console.log(updateData);
  return (
    <div className='bg-pink-200 h-screen'>
      
<div className='p-4'>
 <Navvbr setToggle={setToggle}></Navvbr>
</div>
      {
        toggle?(<div className='p-4 flex gap-4'>
        {
          formData.map((ele)=>{
        return  <UserCard user={ele} key={ele.id} setToggle={setToggle} deletFunction={deletFunction} setUpdateData={setUpdateData}></UserCard>
          })
        }
      </div>):(<div className='p-4 brober broder-black'>
        <From setFormData={setFormData} setToggle={setToggle} formData={formData} updateData={updateData}   setUpdateData={setUpdateData}></From>
      </div>)
      } 
    </div>
  )
}

export default App
