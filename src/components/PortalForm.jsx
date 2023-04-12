import React from 'react'
import { Formik,Form} from 'formik'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import { advancedSchema } from '../schemas'
import{Link } from 'react-router-dom'

const onsubmit=async (values,actions) => {
  console.log(values)
  await new Promise(resolve=>{
    /*setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(true);
    }, 2000);*/
    setTimeout(resolve, 5000);
  })
  actions.resetForm()
 
  //console.log(actions)
}

function PortalForm() {
  return (
    <>
      <Formik
       initialValues={{
         username: '',
         university: '',
         isAccepted: false,}}
        
       onSubmit={onsubmit}
       validationSchema={advancedSchema}
     >
       {(props) => (
         <Form>
           <CustomInput label="Kullanıcı Adı" classEr="input-error"  classN="inputDiv" id="username" name="username" type="text" placeholder="Kullanıcı Adını Giriniz"  />
           <CustomSelect label="Üniversite" classEr="input-error"  classN="inputDiv" id="university" name="university"  placeholder="Lütfen Üniversitenizi Seçiniz">
            <option value="">Lütfen Üniversitenizi Seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">Galatasaray Üniversitesi</option>
            <option value="odtu">Odtü</option>
            <option value="itu">İTÜ</option>
           </CustomSelect>
           <CustomCheckbox text="Kullanıcı Sözleşmesini Kabul Ediyorum." classEr="input-error"  classN="checkboxDiv" id="isAccepted" name="isAccepted" type="checkbox" placeholder="Kullanıcı Adını Giriniz"  />
          <div  className='inputDiv'>
              <button   disabled={props.isSubmitting} type='submit'>
                {props.isSubmitting===true ? 'Lütfen Bekleyiniz...':'Kaydet'}
              </button>
            </div>
          <p className='link' ><Link to="/" >Anaforma Git</Link></p>
          
         </Form>
       )}
     </Formik>
    
    </>
  )
}

export default PortalForm