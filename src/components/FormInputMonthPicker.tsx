import { DatePicker, Form } from 'antd'
import React, { useContext } from 'react'
import { FormContext } from './FormContext'
// import * as moment from 'moment'

interface Props {
  name: string
  label: string
  isControlledManually?: boolean
  manualValue?: string
  disabled?: boolean
  placeholder?: string
  type?: any
}

const { MonthPicker } = DatePicker

export default function FormInputMonthPicker(props: Props) {
  const control = useContext(FormContext)

  const { name, label } = props

  const isTouched = control.touched[`${name}`]
  const error = control.errors[`${name}`]
  // const value = isControlledManually ? manualValue : control.values[`${name}`]

  return (
    <Form.Item
      label={label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : '') : ''}
      help={isTouched ? error : ''}
    >
      <MonthPicker
        format='MM/YYYY'
        onChange={(_date, dateString) =>
          control.handleInputChange(props.name, dateString)
        }
        placeholder={props.placeholder}
      />
    </Form.Item>
  )
}
