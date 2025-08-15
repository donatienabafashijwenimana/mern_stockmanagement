import React from 'react'
import { switchpage } from '../store/pagestore'
function Addcategories() {
    require('../css/form.css')

    const {setform}= switchpage()
  return (
    <div className='form'>
        
        <form action="">
            <div className="form-title">
                add product
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">product name</label>
            <input type="text" name="" id="" />
            <label htmlFor="" className="fieldname"> category</label>
            <select name="" id=""></select>
            <label htmlFor="" className="fielname">unit price</label>
            <input type="text" name="" id="" />
            <label htmlFor="" className="fieldname">cost price</label>
            <input type="number" name="" id="" />
            <label htmlFor="" className="fieldname">selling price</label>
            <input type="number" name="" id="" />
            <label htmlFor="" className="fielname"></label>
            <select name="" id="">
                <option value="">active</option>
                <option value="">non-active</option>
            </select>
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addcategories
