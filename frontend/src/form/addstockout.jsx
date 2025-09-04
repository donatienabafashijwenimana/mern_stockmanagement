import React, { useState } from 'react'
import { switchpage } from '../store/pagestore'
import {stockoutstore} from '../store/stockoutstore'

function Addstockout() {
    require('../css/form.css')

    const {setform,form_data}= switchpage()
    const {addstockout}= stockoutstore()

    const formmatdateforinput = (datestring)=>{
        if(!datestring) return '';
        const d = new Date(datestring);
        return d.toISOString().split("T")[0]
    }

    const [data,setdata]=useState({
        product:form_data.product && form_data.product._id,
        quantity:form_data.quantity,
        customer:form_data.customer && form_data.customer._id,
        date:form_data && formmatdateforinput(form_data.date),
        price:form_data.price
    })
    
    const submit_form =()=>{
        if(!data.product) return alert('⚠️invalid product')
        if(!data.quantity) return alert('⚠️invalid quantity')
        if(!data.customer) return alert('⚠️invalid customer')
        if(!data.date) return alert('⚠️invalid date')
        if(!data.price) return alert('⚠️invalid price')
            
        addstockout(data.product,data.quantity,data.customer,data.date,data.price,form_data._id);
        setform(null)
        // }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                confirm sales order delivery
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>

            <label htmlFor="" className="fieldname">product</label>
            <select name="" id="" defaultValue={data.product || ''}
             onChange={(e)=>setdata({...data,product:e.target.value})}>
                <option value={form_data.product._id} >{form_data.product.product_name}</option>
            </select>

            <label htmlFor="" className="fieldname"> quantity</label>
            <input type="text" name="" id="" value={data.quantity} 
            onChange={(e)=>setdata({...data,quantity:e.target.value})}/>
             
            <label htmlFor="" className="fieldname">customer</label>
            <select name="" id="" defaultValue={data.customer || ''}
             onChange={(e)=>setdata({...data,customer:e.target.value})}>
                <option value={form_data.customer._id} >{form_data.customer.customer_name}</option>
            </select>
            
            <label htmlFor="" className="fieldname">delivered_date date</label>
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

export default Addstockout
