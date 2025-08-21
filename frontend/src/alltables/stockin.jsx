
import React, { useEffect } from 'react'
import { switchpage } from '../store/pagestore'
import { stockinstore } from '../store/stockinstore'

function Stockin() {
    require('../css/table.css')

    const th_ =['#','date','product','supplier','quantity','total price']
  
    const {stockin_list,setstockinlist} = stockinstore()
    const {setform}= switchpage()

    useEffect(()=>{
      setstockinlist()
    })
     console.log(stockin_list)
    const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-GB"); 
  };
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
          {stockin_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.product.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.supplier.supplier_name}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.unit_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Stockin

