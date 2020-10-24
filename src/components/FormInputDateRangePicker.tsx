import { DatePicker, Form } from 'antd'
import React, { useContext } from 'react'
import { FormContext } from './FormContext'

declare type SizeType = 'small' | 'middle' | 'large' | undefined

interface Props {
  name: string
  label: string
  disabled?: boolean
  placeholder?: string
  size?: SizeType
}

export default function FormInputDateRangePicker(props: Props) {
  const control = useContext(FormContext)

  const { name, label, disabled, size } = props

  const isTouched = control.touched[`${name}`]
  const error = control.errors[`${name}`]

  const { RangePicker } = DatePicker

  return (
    <Form.Item
      label={label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : '') : ''}
      help={isTouched ? error : ''}
    >
      <RangePicker
        onChange={(_date, dateString) =>
          control.handleInputChange(props.name, dateString)
        }
        disabled={disabled}
        size={size}
      />
    </Form.Item>
  )
}
