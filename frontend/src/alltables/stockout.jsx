
import React, { useEffect } from 'react'
// import { switchpage } from '../store/pagestore'
import { stockoutstore } from '../store/stockoutstore'

function Stockout() {
    require('../css/table.css')

    const th_ =['#','date','product','quantity','customer','total price']
    const {stockout_list,setstockoutlist} = stockoutstore()
    // const {setform}= switchpage()

    useEffect(()=>{
      setstockoutlist()
    })
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
          {stockout_list.map((item,i)=>(
            
            <tr key={i}>
                <td>{i+1}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.product && item.product.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.customer.customer_name}</td>
                <td>{item.unit_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Stockout

