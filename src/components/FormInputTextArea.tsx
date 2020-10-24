import React, { useContext } from 'react'
import FormContext from './FormContext'
import { Form, Input } from 'antd'

interface Props {
    name: string
    label: string
    rows?: number
    isControlledManually?: boolean
    manualValue?: string
    disabled?: boolean
    placeholder?: string
}

export default function FormInputText(props: Props) {
    const control = useContext(FormContext)

    const { name, label, isControlledManually, manualValue, disabled, placeholder, rows } = props

    const isTouched = control.touched[`${name}`]
    const error = control.errors[`${name}`]
    const value = isControlledManually ? manualValue : control.values[`${name}`]

    return (
        <Form.Item
            label={label}
            hasFeedback
            validateStatus={isTouched ? (error ? 'error' : value && value.length > 0 ? 'success' : '') : ''}
            help={isTouched ? error : ''}
        >
            <Input.TextArea
                onChange={(e) => control.handleInputChange(name, e.target.value)}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                name={name}
                rows={rows}
            />
        </Form.Item>
    )
}
