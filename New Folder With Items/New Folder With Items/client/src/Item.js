import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
const Item = ({item}) => {
  const [qu,setQu]=useState();
  const dispatch=useDispatch();
    const total=qu*item.Price
  const add=()=>{
    dispatch({type:"addtocart",payload:{...item,quantity:qu,total:total}})
  }
  return (
    <div>
    <div className='my-3 m-3 shadow-lg p-3 mb-5 bg-white rounded'>
        <h5 className='my-2'>{item.Name}</h5>
        <img src={item.Image} className="my-2" style={{"width":"200px","height":"200px"}}></img>
        <div className='d-flex justify-content-around my-3'>
        <p>Price:{item.Price}</p>
        <p>quantity:</p>
        <select value={qu} onChange={(e)=>setQu(e.target.value)}>
        {
          item.quantity.map((quan)=>{
            return <option value={quan}>{quan}</option>
          })
        }
        </select>
        </div>
        <p className='my-3'>SUB TOTAL:{qu*item.Price}</p>
       <center>
       <button className='mt-2 btn-success' onClick={add}>Add to cart</button>
       </center> 
    </div>
    </div>
  )
}

export default Item
/* <h5 className='my-2'>{item.Name}</h5>
        <img src={item.Image} className="my-2" style={{"width":"200px","height":"200px"}}></img>
        <div className='d-flex justify-content-around my-3'>
        <p>Price:{item.Price}</p>
        <p>quantity:</p>
        <select value={qu} onChange={(e)=>setQu(e.target.value)}>
        {
          item.quantity.map((quan)=>{
            return <option value={quan}>{quan}</option>
          })
        }
        </select>
        </div>
        <p className='my-3'>SUB TOTAL:{qu*item.Price}</p>
       <center>
       <button className='mt-2 btn-success'>Add to cart</button>
       </center> */