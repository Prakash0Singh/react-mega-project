import React,{useId} from 'react'

function Select({
    options=[],
    label,
    className='',
    ...props
},ref) {
    const id=useId();
  return (
    <div className='w-100'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`p-3 py-2 rounded-3 bg-white text-dark border border-light w-100 custom-focus ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
