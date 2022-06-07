import React from 'react'
import {Link} from 'react-router-dom'
import menu from '../Images/menu.jpg'
import {MdKeyboardArrowDown} from 'react-icons/md'
import './NavBar1.css'
function NavBar1() {
  return (
    <div className='conatinerNav'>
        <div className='logo'>

           <h2 style={{   fontWeight:'700'}}>tm.</h2>
        </div>
<div className='NavRight'>
< Link to='eng'>
          <select style={{border:'none'}}>
              <option>English</option>
              </select></Link>
      <Link to='/menu' className='linktag' ><img src={menu} className='menuicon'  /></Link>
      <Link to='/user' className='linktag'>Savadfarooqueng</Link>
      <Link to='/sf' className='linktag'><span className='SF'>SF</span></Link>
      <span className='drop'><MdKeyboardArrowDown/></span>

</div>


</div>


  )
}

export default NavBar1