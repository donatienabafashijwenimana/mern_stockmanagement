import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { customerstore } from '../store/customer'
function Addcustomer() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {addcustomer,updatcustomer} = customerstore()
    
    const {form_data}= switchpage()
    const [data,setdata]=useState({
        c_name:form_data.customer_name,
        contact:form_data.contact,
        email:form_data.email,
        address:form_data.address
    })
    const submit_form =()=>{
        const contact_pattern =/^07[0-9]{8}$/
        if(!data.c_name || data.c_name.length<4) return alert('⚠️invalid customer name');
        if(!data.contact || !contact_pattern.test(data.contact)) return alert('⚠️invalid contact');
        if(!data.email) return alert('⚠️invalid email');
        if(!data.address) return alert('⚠️invalid address');
        if (form_data._id ){
            updatcustomer(data.c_name,data.contact,data.email,data.address,form_data._id);
            setform(null)
        }
        else{
            addcustomer(data.c_name,data.contact,data.email,data.address);
            setform(null)
        }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                add customer
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">customer name</label>
            <input type="text" name="" id="" value={data.c_name}
            onChange={(e)=>setdata({...data,c_name:e.target.value})}/>
            <label htmlFor="" className="fieldname"> contact</label>
            <input type="text" name="" id="" value={data.contact} onChange={(e)=>setdata({...data,contact:e.target.value})}/>
            <label htmlFor="" className="fieldname">email</label>
            <input type="email" name="" id=""  value={data.email}
            onChange={(e)=>setdata({...data,email:e.target.value})}/>
            <label htmlFor="" className="fieldname">address</label>
            <input type="address" name="" id="" value={data.address}
             onChange={(e)=>setdata({...data,address:e.target.value})}/>
            
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addcustomer
