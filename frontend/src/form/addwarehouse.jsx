import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { warehousestore } from '../store/warehouse'
function Adddwarehouse() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {addwarehouse,updatewarehouse} = warehousestore()
    
    const {form_data}= switchpage()
    const [data,setdata]=useState({
        w_name:form_data.warehouse_name,
        location:form_data.location || null,
        manager:form_data.manager,
        description :form_data.description,
    })
    const submit_form =()=>{
        if (!data.w_name) return alert('⚠️invalid warehouse name');
        if (!data.location) return alert('⚠️invalid location');
        if (!data.manager) return alert('⚠️invalid manager name');
        if (!data.description) return alert('⚠️invalid description');
        if (form_data._id ){
            updatewarehouse(data.w_name,data.location,data.manager,data.description,form_data._id);
            setform(null)
        }
        else{
            addwarehouse(data.w_name,data.location,data.manager,data.description,);
            setform(null)
        }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                add warehouse
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">warehouse name</label>
            <input type="text" name="" id="" value={data.w_name}
            onChange={(e)=>setdata({...data,w_name:e.target.value})}/>
            <label htmlFor="" className="fieldname"> location</label>
            <input type="text" name="" id="" value={data.location}
            onChange={(e)=>setdata({...data,location:e.target.value})}/>
            <label htmlFor="" className="fieldname">manager</label>
            <input type="text" name="" id=""  value={data.manager}
            onChange={(e)=>setdata({...data,manager:e.target.value})}/>
            <label htmlFor="" className="fieldname">description</label>
            <textarea  id="" value={data.description}
             onChange={(e)=>setdata({...data,description:e.target.value})}> Write description</textarea>
            
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Adddwarehouse
