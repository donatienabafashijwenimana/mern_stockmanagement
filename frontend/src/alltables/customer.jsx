import React from 'react'

function Customer() {
    require('../css/table.css')

    const th_ =['#','customer','phone number','email','address','action']
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
            <td>smith john</td>
            <td>0789581223</td>
            <td>smith@gimail.com</td>
            <td>muhanga-rwanda</td>
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

export default Customer
