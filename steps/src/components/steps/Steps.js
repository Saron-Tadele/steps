import React, { useState } from 'react'
import './steps.css'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const message = [
 "Learn React",
 "Apply For Jobs 😎",
 "Invest your new income 🤑"
]
const Steps = () => {
  const [step, setStep] = useState(1)
  const [test, setTest] = useState({ name: "saron" })
  const [isOpen, setIsOpen] = useState(true)
function handlePrevious() {
  if(step>1)
   setStep(step-1) 
  }
  function Open() {
    setIsOpen(!isOpen)
  }
 function handleNext() {
  if(step<3)
     setStep(step + 1) 
   setTest({name:"Abebe"})

 }
 // const step = 1;
  return (
    <div>
       <div className='close'>
        <IconButton onClick={Open}>
        <CloseIcon />
      </IconButton>
      </div>
      {isOpen && (
    <div className='steps'>

     
    <div className='btn-1'>
     <button className={step >= 1 ? "active" : ""}>
      1
     </button>
     <button className={step >= 2 ? "active" : ""} >
      2
     </button>
     <button className={step >= 3 ? "active" : ""}>
      3
     </button>
    </div>
    <div className=' message '>
        step {step}: {message[step - 1]}
        {test.name}
    </div>
     <div className='btn-2'>
     <button onClick={handlePrevious}>
      previous
     </button>
     <button onClick={handleNext}>
      next
     </button>
   </div>
      </div>)}
      </div>
  )
}

export default Steps