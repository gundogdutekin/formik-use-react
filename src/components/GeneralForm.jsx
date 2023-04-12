import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import {Link  } from "react-router-dom";
const onSubmit=async (values,actions) => {
         
  console.log(values);
  console.log(actions);

  await new Promise(resolve=>{
     setTimeout(resolve, 2000);
  })
actions.resetForm();

}
function GeneralForm() {
    const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:''
        }, 
        onSubmit,
        validationSchema:basicSchema
      });
  return (
    <form onSubmit={handleSubmit}>
       <div className='inputDiv'>
        <label htmlFor="email">Email </label>
        <input type="email" id="email"  onChange={handleChange} value={values.email} placeholder='Email adresinizi giriniz.' className={errors.email ? 'input-error':''}/>
        {errors.email && <div className='error'>{errors.email}</div>}
       </div>
       <div className='inputDiv'>
        <label htmlFor="age">Yaş </label>
        <input type="number" id="age"  onChange={handleChange} value={values.age} placeholder='Yaşınızı giriniz.'className={errors.age?'input-error':''} />
        {errors.age && <div className='error'>{errors.age}</div>}
       </div>
       <div className='inputDiv'>
        <label htmlFor="password">Şifre </label>
        <input type="password" id="password"   onChange={handleChange} value={values.password} placeholder='Şifrenizi giriniz.'className={errors.password?'input-error':''} />
        {errors.password && <div className='error'>{errors.password}</div>}
       </div>
       <div className='inputDiv'>
        <label htmlFor="confirmPassword">Şifre Tekrarı </label>
        <input type="password" id="confirmPassword"   onChange={handleChange} value={values.confirmPassword} placeholder='Şifrenizi tekrar giriniz.'className={errors.confirmPassword?'input-error':''} />
        {errors.confirmPassword && (<div className='error'>{errors.confirmPassword}</div>)}
       </div>
       <div  className='inputDiv'><button disabled={isSubmitting} type='submit'>Kaydet</button></div>
       <p className='link' ><Link to="/portal" >Portala Git</Link></p>
    </form>
    
  )
}

export default GeneralForm