import React from 'react'

const InputField = ({type, name, placeholder, id, label, className, value, onChange}) => {
  return (
    <div>
    <label htmlFor="" className='text-RfGray2 text-md'>{label}</label>
    <input onChange={onChange} type={type} name={name} value={value} placeholder={placeholder} className={className} id={id} />
    </div>
  )
}

export default InputField