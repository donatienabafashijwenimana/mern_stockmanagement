import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { supplierstore } from '../store/supplier'
function Addsupplier() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {addsupplier,updatesupplier} = supplierstore()
    
    const {form_data}= switchpage()
    const [data,setdata]=useState({
        s_name:form_data.supplier_name,
        contact:form_data.contact,
        email:form_data.email,
        address:form_data.address,
        p_supply:form_data.product_supply
    })
    const submit_form =()=>{
        const contact_pattern =/^07[0-9]{8}$/
        if(!data.s_name || data.s_name.length<4) return alert('⚠️invalid supplier name');
        if(!data.contact || !contact_pattern.test(data.contact)) return alert('⚠️invalid contact');
        if(!data.email) return alert('⚠️invalid email');
        if(!data.address) return alert('⚠️invalid address');
        if(!data.p_supply) return alert('⚠️invalid product can supply');
        if (form_data._id ){
            updatesupplier(data.s_name,data.contact,data.email,data.address,data.p_supply,form_data._id);
            setform(null)
        }
        else{
            addsupplier(data.s_name,data.contact,data.email,data.address,data.p_supply);
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
            <label htmlFor="" className="fieldname">supplier name</label>
            <input type="text" name="" id="" value={data.s_name}
            onChange={(e)=>setdata({...data,s_name:e.target.value})}/>

            <label htmlFor="" className="fieldname"> contact</label>
            <input type="text" name="" id="" value={data.contact} 
            onChange={(e)=>setdata({...data,contact:e.target.value})}/>

            <label htmlFor="" className="fieldname">email</label>
            <input type="email" name="" id=""  value={data.email}
            onChange={(e)=>setdata({...data,email:e.target.value})}/>
            
            <label htmlFor="" className="fieldname">address</label>
            <input type="address" name="" id="" value={data.address}
             onChange={(e)=>setdata({...data,address:e.target.value})}/>

             <label htmlFor="" className="fieldname">product can supply</label>
            <textarea type="address" name="" id="" value={data.p_supply}
             onChange={(e)=>setdata({...data,p_supply:e.target.value})}></textarea>
            
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addsupplier
