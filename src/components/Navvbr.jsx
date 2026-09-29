import React from 'react'

const Navvbr = ({setToggle}) => {
  return (
    <div className='flex bg-pink-500 iteams-center justify-between p-2'>
     <div>
      <img 
       className='w-10 h-10 rounded-full object-cover'
      src="https://media.istockphoto.com/id/2232275770/photo/indian-woman-counting-cash-dollars-using-calculator-on-sofa-worried-family-budget-documents.jpg?s=2048x2048&w=is&k=20&c=EpGjIHVt_OoGHTcPr2YFh47hWJ2TbdD79ThM0PG09lM=" alt="" />
     </div>
     <div className='flex gap-6 font-semibold'>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
     </div>
     <div>
      <button 
     onClick={()=>setToggle(prev => !prev)}
      className='p-2 bg-blue-500 rounded text-white cursor-pointer'>Cerate Button</button>
     </div>
    </div>
  )
}

export default Navvbr
