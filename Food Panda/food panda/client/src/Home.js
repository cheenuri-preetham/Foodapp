import React, { useState } from 'react'
import Navbar from './Navbar'
import Listitems from './List'
import Item from './Item'
const Home = () => {
  const [list,setList]=useState([]);
  const all=()=>{
    setList(Listitems);
  }
  const veg=()=>{
    const exist=Listitems.filter((item)=>item.Category==="veg")
    setList(exist)
  }
  const non=()=>{
    const exist=Listitems.filter((item)=>item.Category==="Non-veg")
    setList(exist)
  }
  return (
    <div>
  <Navbar>
  <div className='d-flex justify-content-around mb-3 mt-0'>
    <button onClick={all}>ALL</button>
    <button onClick={veg}>VEG</button>
    <button onClick={non}>NON-VEG</button>
  </div>
  <div className='row d-flex justify-content-around'>
      {
         list.map((item)=><div className='col-mx-6 col-md-3'>
          <Item item={item}></Item>
          
         </div>)
      }
      </div>
  </Navbar>
    </div>
  )
}

export default Home
/* <Navbar>
      <div className='row d-flex justify-content-around'>
      {
         Listitems.map((item)=><div className='col-mx-6 col-md-3'>
          <Item item={item}></Item>
         </div>)
      }
      </div>
      </Navbar>
      */