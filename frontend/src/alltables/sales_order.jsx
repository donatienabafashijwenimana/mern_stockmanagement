import React from 'react'

function Sorder() {
    require('../css/table.css')

    const th_ =['#','product','quantity','customer','warehouse','order date','expected date','status','action']
  return (
    <div>
      <table border="1">
        <thead>
          {th_.map((_th_,i) => (
            <th className='action'>{_th_}</th>
          
          ))}
            
        </thead>
        <tr>
            <td>1</td>
            <td>rice</td>
            <td>100kg</td>
            <td>smith john</td>
            <td>kigali city</td>
            <td>1/1/2024</td>
            <td>7/3/2024</td>
            <td>delivered</td>
            <td className='action'>
                <select name="action" className="action-button">
                    <option value="" disabled selected>choose action</option>
                    <option value="update">update</option>
                    <option value="delete">delete</option>
                </select>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Sorder
