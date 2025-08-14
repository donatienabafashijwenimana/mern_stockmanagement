import React from 'react'

function Product() {
    require('../css/table.css')
  return (
    <div>
      <table border="1">
        <thead>
            <th>#</th>
            <th>product</th>
            <th>category</th>
            <th>unit measure</th>
            <th>cost price</th>
            <th>selling price</th>
            <th>status</th>
            <th action>action</th>
        </thead>
        <tr>
            <td>1</td>
            <td>rice</td>
            <td>food</td>
            <td>kg</td>
            <td>1500</td>
            <td>2000</td>
            <td>active</td>
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

export default Product
