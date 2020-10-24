import {
    withFormWrapper,
    FormInputDatePicker,
    FormInputText,
    FormSubmitButton,
    FormInputMonthPicker,
    FormInputTextArea,
    FormInputDateRangePicker
} from 'react-ant-form-wrapper'
import React from 'react'
import * as Yup from 'yup'

const INITIAL_STATE = {
    name: ''
}

const VALIDATION_SCHEMA = Yup.object({
    name: Yup.string().required('Name is required')
})

const FormComponentExample: React.FC = (props) => {
    //const control = useContext(FormContext)
    const handleSubmit = () => {
        // console.log(props.values)
        console.log(props)
        // console.log(props.values)
        // props.control.resetData()
    }

    return (
        <div style={{ margin: '20px' }}>
            <FormInputText name='name' label='Name' />
            <FormInputTextArea name='description' label='Description' />
            <FormInputMonthPicker name='month' label='Select Month' />
            <FormInputDatePicker name='date' label='Select Date' />
            <FormInputDateRangePicker name='dateRange' label='Select Date Range' />
            <FormSubmitButton onSubmit={handleSubmit} />
        </div>
    )
}

export default withFormWrapper(FormComponentExample, INITIAL_STATE, VALIDATION_SCHEMA)
