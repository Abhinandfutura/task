import React from 'react'
import file from './Images/file.jpg'
import squareMenu from './Images/squareMenu.jpg'
import plus from './Images/plus.jpg'
import './Sidebar.css'
function ProjectList() {
  return (
    <div className='sidebar'>
      <div className='summary'>
      <img src={file} className='sidebar_menuicon'/> <h4  className='textMenu'>Summary</h4>

      </div>
    

      <div className='Project1' style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
<div  className='project1__left'>
        <img src={squareMenu} className='sidebar_menuicon'/><h4 className='textMenu'>Projects</h4>
        </div>
        <div> <img src={plus} style={{ width:'22px',marginRight: '20px'}} /></div>
      </div>
      </div>

      
       
  )
}

export default ProjectList