import React, { useEffect, useState } from 'react'
import { switchpage } from '../store/pagestore'
import { categorystore } from '../store/categorystore'
import { productstore } from '../store/productstore'
function Addcategories() {
    require('../css/form.css')

    const {setform}= switchpage()
    const {categorieslist,setcategorieslist}=categorystore()
    const {addproduct,updateproduct} = productstore()
    
    const {form_data}= switchpage()
    const [data,setdata]=useState({
        pname:form_data.product_name,
        category:form_data.category && form_data.category._id || null,
        u_measure:form_data.unit_measure,
        c_price:form_data.cost_price,
        s_price:form_data.sold_price,
        status:form_data.status || 'active'
    })
    useEffect(()=>{
        setcategorieslist()
    },[])
    const submit_form =()=>{
        if(!data.pname || data.pname.length < 3)return alert('⚠️invalid product name');
        if(!data.category) return alert('⚠️invalid category');
        if(!data.u_measure) return alert('⚠️unit measure is required')
        if(!data.c_price) return alert('⚠️sell price is required')
        if(!data.s_price) return alert('⚠️sell price is required')
        if(!data.status) return alert('⚠️status is required')
        if (form_data._id ){
            updateproduct(data.pname,data.category,data.u_measure,
            data.c_price,data.s_price,data.status,form_data._id);
            setform(null)
        }
        else{
            
            addproduct(data.pname,data.category,data.u_measure,data.c_price,data.s_price,data.status);
            setform(null)
        }
    }
  return (
    <div className='form'>
        
        <form action="" onSubmit={(e)=>{e.preventDefault();submit_form()}}>
            <div className="form-title">
                add product
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">product name</label>
            <input type="text" name="" id="" value={data.pname}
            onChange={(e)=>setdata({...data,pname:e.target.value})}/>
            <label htmlFor="" className="fieldname"> category</label>
            <select name="" id="" defaultValue={data.category || ''}
             onChange={(e)=>setdata({...data,category:e.target.value})}>
                <option value=""  disabled>choose category</option>
                {categorieslist.map((item,i)=>(
                   <option key={i} value={item._id} >{item.category_name}</option>
                ))}
            </select>
            <label htmlFor="" className="fielname">unit measure</label>
            <input type="text" name="" id="" value={data.u_measure} onChange={(e)=>setdata({...data,u_measure:e.target.value})}/>
            <label htmlFor="" className="fieldname">cost price</label>
            <input type="number" name="" id=""  value={data.c_price}
            onChange={(e)=>setdata({...data,c_price:e.target.value})}/>
            <label htmlFor="" className="fieldname">selling price</label>
            <input type="number" name="" id="" value={data.s_price}
             onChange={(e)=>setdata({...data,s_price:e.target.value})}/>
            <label htmlFor="" className="fielname"></label>
            <select name="" id="" defaultValue={ data.status} onChange={(e)=>setdata({...data,status:e.target.value})}>
                <option value="active">active</option>
                <option value="non-active">non-active</option>
            </select>
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addcategories
