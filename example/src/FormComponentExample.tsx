import { withFormWrapper , FormInputText , FormSubmitButton , FormInputMonthPicker } from 'react-ant-form-wrapper'
import React  from 'react'
import * as Yup from 'yup';

const INITIAL_STATE = {
  name: ""
}


const VALIDATION_SCHEMA = {
  name: Yup.string().required('Name is required')
}
 const FormComponentExample: React.FC =  (props: any) => {

   const handleSubmit = () => {
     console.log(props.values)
   }

   return <div style={{margin:"20px"}}>
     <FormInputText name="name" label="Name" />
     <FormInputMonthPicker name="month" label="Select Month" />
     <FormSubmitButton onSubmit={handleSubmit}/>
   </div>
}


export default withFormWrapper( FormComponentExample , INITIAL_STATE , VALIDATION_SCHEMA);
