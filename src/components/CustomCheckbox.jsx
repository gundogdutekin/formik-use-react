import { useField,useFormikContext } from 'formik'
import React from 'react'

function CustomCheckbox({classN,classEr,label,text,...props}) {
    const[field,meta,helpers]=useField(props);
    const context=useFormikContext()
    //console.log(field);
    //console.log(meta);
    //console.log(helpers);
    //console.log(context)
  return (
    <>
    <div className={classN}>
    
    <input  {...field} {...props} className={meta.touched && meta.error ? (`checkbox ${classEr}`):'checkbox'}/><span className="checkboxSpan">{text}</span>
    </div>
    {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>):null}
    </>
    
  )
}

export default CustomCheckbox