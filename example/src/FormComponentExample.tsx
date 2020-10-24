import {
    withFormWrapper,
    FormInputDatePicker,
    FormInputText,
    FormInputMonthPicker,
    FormInputTextArea,
    FormInputDateRangePicker,
    ValidationConstants
} from 'react-ant-form-wrapper'
import React from 'react'
import * as Yup from 'yup'
import { Button } from 'antd'

const INITIAL_STATE = {
    name: '',
    mobileNumber: '',
    email: '',
    amount: ''
}

const VALIDATION_SCHEMA = Yup.object({
    name: Yup.string().required('Name is required'),
    mobileNumber: ValidationConstants.REQUIRED_VALID_MOBILE_NUMBER,
    email: ValidationConstants.REQUIRED_VALID_EMAIL,
    amount: ValidationConstants.DIGIT_ONLY
})

const FormComponentExample: React.FC = (props: any) => {
    const handleSubmit = () => {
        console.log(props.values)
    }
    const clearForm = () => {
        props.resetData()
    }

    return (
        <div style={{ margin: '20px' }}>
            <FormInputText name='name' label='Name' />
            <FormInputText name='mobileNumber' label='Mobile Number' />
            <FormInputText name='email' label='Email Address' />
            <FormInputText name='amount' label='Amount' />
            <FormInputTextArea name='description' label='Description' />
            <FormInputMonthPicker name='month' label='Select Month' />
            <FormInputDatePicker name='date' label='Select Date' />
            <FormInputDateRangePicker name='dateRange' label='Select Date Range' />
            <Button onClick={clearForm}> Clear form </Button>
            <Button onClick={handleSubmit}> Submit form </Button>
        </div>
    )
}

export default withFormWrapper(FormComponentExample, INITIAL_STATE, VALIDATION_SCHEMA)
