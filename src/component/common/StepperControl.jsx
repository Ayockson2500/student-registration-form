import React from 'react'
import Button from '../button/Button'

const StepperControl = ({steps,currentStep,handleClick}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <Button onClick={() => handleClick()} className={`bg-RfOrange py-2 px-5 rounded-md hover:bg-RfOrange3 text-RfWhite transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-75 cursor-not-allowed" : ""}`}>Back</Button>
        <Button onClick={() => handleClick("next")} className={'bg-Rfcyan py-2 px-5 rounded-md hover:bg-Rfcyan2 text-RfWhite transition duration-200 ease-in-out'}>{currentStep > steps.length - 1 ? "Open Account" : "Next"}</Button>
    </div>
  )
}

export default StepperControl