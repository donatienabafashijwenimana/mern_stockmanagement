import React from 'react'
import { switchpage } from '../store/pagestore'

import 'bootstrap-icons/font/bootstrap-icons.css';
function Addcategories() {
    require('../css/form.css')

    const {setform}= switchpage()
  return (
    <div className='form'>
        
        <form action="">
            <div className="form-title">
                add categories 
                <i onClick={()=>setform(null)} className='bi bi-x-circle'></i>
            </div>
            <label htmlFor="" className="fieldname">category name</label>
            <input type="text" name="" id="" />
            <label htmlFor="" className="fieldname">category description</label>
            <textarea name="" id=""> write description</textarea>
            <button className='save-button'>save</button>
        </form>     
    </div>
  )
}

export default Addcategories
