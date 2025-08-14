import React from 'react'
import Product from '../alltables/product'
import Categories from '../alltables/categories'
import Addproduct from '../form/addproduct'
import Addcategories from '../form/addcategories'

import { switchpage} from '../store/pagestore'

function Leftside() {
    require('../css/left-side.css')

    const {page,setform,form_} = switchpage()
  return (
    <div className='leftside-container'>
        <div className="left-title">
            stock management system
        </div>
        <div className="leftside-subtitle">
            <span>{page}</span>
            {page!=='dashboard' ? <button className='add-button' onClick={()=>setform('add')}> ➕ new</button>:''}
        </div>
        <div className="leftside-content">
            {page==='categories' && <Categories/>}
            {page==='product' && <Product/>}
        </div>
        {form_ &&
         <div className="form-container">
            {form_=='addcategories' && <Addcategories/>}
            {form_=='addproduct' && <Addproduct/>}
         </div>
        }
    </div>
  )
}

export default Leftside
