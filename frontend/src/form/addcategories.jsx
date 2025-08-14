import React from 'react'
import { switchpage } from '../store/pagestore'
function Addcategories() {
    require('../css/form.css')

    const {setform}= switchpage()
  return (
    <div className='form'>
        
        <form action="">
            <div className="form-title">
                add categories 
                <button className='close-button' onClick={()=>setform(null)}>x</button>
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
