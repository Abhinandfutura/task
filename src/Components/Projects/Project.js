import React from 'react'
import './Project.css'
import listBox from'../Images/listBox.jpg'
import verticalSquare from'../Images/verticalSquare.jpg'
function Project() {
  return (
      <div style={{ marginLeft: '280px',  width: '79.2%',height:'100vh',background:'#FAFCFF'}}>
    <div className='projectBody'>

<div className='projectName'>

   <h3 className='projectTask'> Project Tasks</h3>

</div>

<div className='projectBody__icons'>
    <div className="iconleft">
        <img src={listBox} className='iconlist'/>
        <img src={verticalSquare}  style={{width:'26px'}}/>
    </div>
    <div className="iconRight">
        <h6 style={{margin:0}}>Filter :</h6> 
        <select className='allSelect'>
            <option>All</option>
        </select>
    </div>
</div>

<div className='projectBody__creatBtn'>

    <button className='projectbodyBtn'>Create</button>
</div>
    </div>

    </div>
  )
}

export default Project