import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { supplierstore } from '../store/supplier'
import { productstore } from '../store/productstore'
import {stockinstore} from '../store/stockinstore'

function Addstockin() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {supplier_list,setsupplierlist} = supplierstore()
    const {product_list,setproductlist} = productstore()
    const {addstockin}= stockinstore()

    const formmatdateforinput = (datestring)=>{
        if(!datestring) return '';
        const d = new Date(datestring);
        return d.toISOString().split("T")[0]
    }
    
    const {form_data}= switchpage()

    const [data,setdata]=useState({
        product:form_data.product && form_data.product._id,
        quantity:form_data.quantity,
        supplier:form_data.supplier && form_data.supplier._id,
        date:form_data && formmatdateforinput(form_data.date),
        price:form_data.price
    })
    useEffect(()=>{
        setproductlist();
        setsupplierlist();
    },[])
    
    const submit_form =()=>{
        if(!data.product) return alert('⚠️invalid product')
        if(!data.quantity) return alert('⚠️invalid quantity')
        if(!data.supplier) return alert('⚠️invalid supplier')
        if(!data.date) return alert('⚠️invalid date')
        if(!data.price) return alert('⚠️invalid price')
            


        addstockin(data.product,data.quantity,data.supplier,data.date,data.price,form_data._id);
        setform(null)
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                confirm delidered order
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>

            <label htmlFor="" className="fieldname">product</label>
            <select name="" id="" defaultValue={data.product || ''}
             onChange={(e)=>setdata({...data,product:e.target.value})}>
                <option value="" disabled>choose product</option>
                {product_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.product_name}</option>
                ))}
            </select>

            <label htmlFor="" className="fieldname"> quantity</label>
            <input type="text" name="" id="" value={data.quantity} 
            onChange={(e)=>setdata({...data,quantity:e.target.value})}/>
             
            <label htmlFor="" className="fieldname">supplier</label>
            <select name="" id="" defaultValue={data.supplier || ''}
             onChange={(e)=>setdata({...data,supplier:e.target.value})}>
                <option value="" disabled>choose supplier</option>
                {supplier_list.map((item,i)=>(
                   <option key={i} value={item._id} >{item.supplier_name}</option>
                ))}
            </select>
            
            <label htmlFor="" className="fieldname">received date</label>
            <input type='date' name="" id="" value={data.date || ''}
             onChange={(e)=>setdata({...data,date:e.target.value})}/>

            <label htmlFor="" className="fieldname">price(FRW)</label>
            <input type="number" name="" id="" value={data.price}
            onChange={(e)=>setdata({...data,price:e.target.value})}/>
            
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addstockin
