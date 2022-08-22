import React from 'react'

const styleLabel={
  display:"inline-block",
  width:"100px"
}
const styleInput={
  width:"400px",
  color:"black"
}



const Feedback = () => {
  return (
    <div className='feedback-component'>
      <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{position:"relative"}}>
          <label data="THIS IS A LABEL" style={styleLabel} htmlFor='name'>Name</label>
          <input style={styleInput} id="name" type="text" />
        </div>
        <div>
          <label style={styleLabel} htmlFor='email'>Email</label>
          <input style={styleInput} id="email" type="text" />
        </div>
        <div>
          <label style={styleLabel} htmlFor='subject'>Subject</label>
          <select style={styleInput}>
            <option>ISSUE</option>
            <option>Miscellaneous</option>
            <option>Others</option>
          </select>
        </div>
        <div>
          <label style={styleLabel} htmlFor='feedback'>Feedback</label>
          <input style={styleInput} id="feedback" type="text" />
        </div>
      </form>
    </div>
  )
}

export default Feedback