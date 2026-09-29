import React from 'react'

const UserCard = ({user , deletFunction , setToggle, setUpdateData}) => {
  return (
    <div>
      <div className='border border-white rounded-2xl gap-2 p-4'>
        <div className='w-50 h-50 p-2'>
          <img 
           className='object-fit h-full w-full rounded-xl' 
          src={user.imageIteam} alt="" />
        </div>
        <div className='flex flex-col p-2 gap-1'>
           <p className='text-sm'>Name:{user.nameIteam}</p>
           <p className='text-sm'>Price:{user.price}</p>
           <p className='text-sm'>Quantity:{user.quantityProduct}</p>
            <p>Total: {Number(user.price) * Number(user.quantityProduct)}</p>
        </div>
        <div className=' flex items-center justify-between w-full gap-4'>
          <button 
          onClick={()=>{
            setUpdateData(user);
            setToggle((prev)=>!prev);
          }}
          className='p-2 bg-red-500 rounded-xl outline-0'>Update</button>
          <button 
         onClick={()=>deletFunction(user.id)}
          className='p-2 bg-green-500 rounded-xl outline-0 '>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
