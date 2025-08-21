import React, { useEffect } from 'react'
import { productstore } from '../store/productstore'
import { switchpage } from '../store/pagestore'

function Product() {
    require('../css/table.css')

    const th_ = ['#','product','category','unit measure','cost price','selling price','status','action']
    
    const {setproductlist,product_list,deleteproduct} = productstore()
    const {setform} = switchpage()
    
    useEffect(()=>{
      setproductlist()
    })
    const submit_action = (id,action)=>{
      if (action=='update'){
        const form_data=product_list.find(p=>p._id==id)
        setform('update',form_data)
      }
      if(action== 'delete'){
        deleteproduct(id)
      }
    }
    return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {th_.map((_th_,i)=>(
              <th key={i} className='action'>{_th_}</th>
            ))}
            
          </tr>
        </thead>
        <tbody>
          {product_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product_name}</td>
                <td>{item.category.category_name}</td>
                <td>{item.unit_measure}</td>
                <td>{item.cost_price}</td>
                <td>{item.sold_price}</td>
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

export default Product
