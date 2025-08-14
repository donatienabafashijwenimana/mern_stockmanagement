import React from 'react'
import Rightside from '../components/rightside'
import Leftside from '../components/leftside'
function Mainpage() {
    require('../css/main.css')
  return (
    <div className='main-container'>
      <div className="main-right-side">
       <Rightside/>
      </div>
      <div className="main-left-side">
        <Leftside/>
      </div>
    </div>
  )
}

export default Mainpage
