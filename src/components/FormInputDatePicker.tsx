import { DatePicker, Form } from 'antd'
import React, { useContext } from 'react'
import moment from 'moment'
import { FormContext } from './FormContext'

declare type SizeType = 'small' | 'middle' | 'large' | undefined

interface Props {
  name: string
  label: string
  isControlledManually?: boolean
  manualValue?: string
  disabled?: boolean
  placeholder?: string
  size?: SizeType
}

export default function FormInputDatePicker(props: Props) {
  const control = useContext(FormContext)

  const {
    name,
    label,
    disabled,
    placeholder,
    isControlledManually,
    manualValue,
    size
  } = props

  const isTouched = control.touched[`${name}`]
  const error = control.errors[`${name}`]
  const value = isControlledManually ? manualValue : control.values[`${name}`]

  return (
    <Form.Item
      label={label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : '') : ''}
      help={isTouched ? error : ''}
    >
      <DatePicker
        value={value ? moment(value) : null}
        onChange={(_date, dateString) =>
          control.handleInputChange(props.name, dateString)
        }
        placeholder={placeholder}
        disabled={disabled}
        size={size}
      />
    </Form.Item>
  )
}
