import React, { useEffect, useState } from 'react'
import { categorystore } from '../store/categorystore'
import {switchpage } from '../store/pagestore'

function Categories() {
  require('../css/table.css')

  const th_ =['#','category','description','status','action']
  const {setform} = switchpage()
  const {categorieslist,setcategorieslist,deletecategory} = categorystore()
  useEffect(()=>{
    setcategorieslist()
  })
  const submit_action = (id,action_type)=>{
    if(action_type=='update'){
      const data = categorieslist.find(c=>c._id==id)
      setform('update',data)
    }
    if(action_type=='delete'){
      deletecategory(id)
    }
  }
 
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {th_.map((_th_,i) => (
              <th key={i} className='action'>{_th_}</th>
            
            ))}
          </tr>
            
        </thead>
        <tbody>
          {categorieslist.map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td className='action'>
                    <select name="action" className="action-button" defaultValue={''}
                      onChange={(e)=>{submit_action(item._id,e.target.value)
                                      e.target.value=''
                      }}>
                        <option value="" disabled>choose action</option>
                        <option value="update">update</option>
                        <option value="delete">delete</option>
                    </select>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Categories
