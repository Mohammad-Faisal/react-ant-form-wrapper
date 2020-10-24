# react-ant-form-wrapper

> This library is used as a lightweight alternative for ant design libraries form elements with validation like formik

[![NPM](https://img.shields.io/npm/v/react-ant-form-wrapper.svg)](https://www.npmjs.com/package/react-ant-form-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ant-form-wrapper
```

## Usage

```tsx
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

```

## License

MIT © [Mohammad-Faisal](https://github.com/Mohammad-Faisal)
