import { useField,useFormikContext } from 'formik'
import React from 'react'

function CustomSelect({classN,classEr,label,...props}) {
    const[field,meta,helpers]=useField(props);
    const context=useFormikContext()
    //console.log(field);
    //console.log(meta);
    //console.log(helpers);
    //console.log(context)
  return (
    <>
    <div className={classN}>
    <label htmlFor={props.id}>{label}</label>
    <select  {...field} {...props} className={meta.touched && meta.error ? (classEr):null}/>
    {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>):null}
    </div>
    
    </>
    
  )
}

export default CustomSelect