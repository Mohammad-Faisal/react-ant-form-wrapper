import { DatePicker, Form } from 'antd'
import React, { useContext } from 'react'
import FormContext from './FormContext'

declare type SizeType = 'small' | 'middle' | 'large' | undefined

interface Props {
    name: string
    label: string
    disabled?: boolean
    placeholder?: string
    size?: SizeType
}

const { MonthPicker } = DatePicker

export default function FormInputMonthPicker(props: Props) {
    const control = useContext(FormContext)

    const { name, label, disabled, placeholder, size } = props

    const isTouched = control.touched[`${name}`]
    const error = control.errors[`${name}`]

    return (
        <Form.Item
            label={label}
            hasFeedback
            validateStatus={isTouched ? (error ? 'error' : '') : ''}
            help={isTouched ? error : ''}
        >
            <MonthPicker
                format='MM/YYYY'
                onChange={(_date, dateString) => control.handleInputChange(props.name, dateString)}
                disabled={disabled}
                placeholder={placeholder}
                size={size}
            />
        </Form.Item>
    )
}
