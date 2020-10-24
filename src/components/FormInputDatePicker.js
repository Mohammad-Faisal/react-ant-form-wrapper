import { DatePicker, Form } from 'antd'
import React from 'react'
import * as moment from 'moment'

export default function FormInputDatePicker(props) {
  const isTouched = props.control.touched[`${props.name}`]
  const error = props.control.errors[`${props.name}`]
  const value = props.control.values[`${props.name}`]

  return (
    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : '') : ''}
      help={isTouched ? error : ''}
    >
      <DatePicker
        value={value ? moment(value) : null}
        onChange={(date, dateString) => props.control.handleInputChange(props.name, dateString)}
        placeholder={props.placeholder}
        size={'default'}
      />
    </Form.Item>
  )
}
