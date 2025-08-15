import React from 'react'
import { switchpage } from '../store/pagestore'

function Rightside() {
    require('../css/right-side.css')

    const {setpage} = switchpage()
    
  return (
    <div className='right-side-container'>
     <div className="title">sms</div> 
     <div className="navigation-container">
        <label onClick={()=>setpage('dashboard')}>Dashboard</label>
        <label onClick={()=>setpage('categories')}>Categories</label>
        <label onClick={()=>setpage('product')}>Product</label>
        <label  onClick={()=>setpage('warehouse')}>Warehouse</label>
        <label onClick={()=>setpage('supplier')}>Supplier</label>
        <label  onClick={()=>setpage('customer')}>Customer</label>
        <label  onClick={()=>setpage('purchasing order')}>Purchasing order</label>
        <label  onClick={()=>setpage('sales order')}>Sales order</label>
        <label onClick={()=>setpage('stock in')}>Stock in</label>
        <label onClick={()=>setpage('stock out')}>Stock out</label>
        <label onClick={()=>setpage('current stock')}>Current stock</label>
     </div>
    </div>
  )
}

export default Rightside
