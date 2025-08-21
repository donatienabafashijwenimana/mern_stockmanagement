import React, { useState } from 'react'
import { switchpage } from '../store/pagestore'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { categorystore } from '../store/categorystore';
function Addcategories() {
    require('../css/form.css')
    
    const {setform,form_data}= switchpage()
    const {insertcategory,updatecategory}= categorystore()
    const [data,setdata]=useState({
      category:form_data.category_name,
      description:form_data.description,
      status:form_data.status || 'active'
    })
    const submit_form =()=>{
      if(!data.category || data.category.length < 4) return alert ('⚠️invalid category name');
      if(!data.description) return alert ('⚠️description is required');
      if(!data.status) return alert ('⚠️status is required');

      if (form_data._id) {
        updatecategory(data.category,data.description,data.status,form_data._id)
        setform(null)
      }else{
        insertcategory(data.category,data.description,data.status)
        setform(null)
      }
      
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                add categories 
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">category name</label>
            <input type="text" name="" id="" value={data.category}
            onChange={(e)=>setdata({...data,category:e.target.value})}/>
            <label htmlFor="" className="fiel dname">category description</label>
            <textarea name="" id="" value={data.description}
            onChange={(e)=>setdata({...data,description:e.target.value})}> write description</textarea>
            <label htmlFor="">status</label>
            <select name="" defaultValue={data.status} onChange={(e)=>setdata({...data,status:e.target.value})}>
              <option value="active">active</option>
              <option value="non-active">non-active</option>
            </select>
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addcategories
