import React, { useContext } from 'react'
import { FormContext } from './FormContext'
import { Form, Input } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'

interface Props {
  name: string
  label: string
  isControlledManually?: boolean
  manualValue?: string
  suffixIcon?: any
  disabled?: boolean
  placeholder?: string
  type?: any
}

export default function FormInputText(props: Props) {
  const control = useContext(FormContext)

  const {
    name,
    suffixIcon,
    label,
    isControlledManually,
    manualValue,
    disabled,
    placeholder,
    type
  } = props

  const isTouched = control.touched[`${name}`]
  const error = control.errors[`${name}`]
  const value = isControlledManually ? manualValue : control.values[`${name}`]

  return (
    <Form.Item
      label={label}
      hasFeedback
      validateStatus={
        isTouched
          ? error
            ? 'error'
            : value && value.length > 0
            ? 'success'
            : ''
          : ''
      }
      help={isTouched ? error : ''}
    >
      <Input
        size='large'
        onChange={(e) => control.handleInputChange(name, e.target.value)}
        suffix={suffixIcon ? <FileTextOutlined /> : null}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </Form.Item>
  )
}
