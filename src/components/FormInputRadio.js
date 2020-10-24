import React, { useEffect } from 'react'
import { Form, Radio } from 'antd'
import { RadioConstants } from '../../assets/constants/GeneralConstants'

export default function FormInputRadio(props) {
  const getRadioItems = () => {
    switch (props.radioFor) {
      case RadioConstants.TYPE_GENDER:
        return RadioConstants.radioOptionsGender
      case RadioConstants.TYPE_USER_ROLE:
        return RadioConstants.radioOptionsUserRole
      case RadioConstants.TYPE_NOTICE_TARGET:
        return RadioConstants.radioOptionsNoticeFor
      case RadioConstants.AUTHORIZATION_STATUS:
        return RadioConstants.radioOptionsPreAuthorizationStatus
      case RadioConstants.TYPE_VEHICLE:
        return RadioConstants.radioOptionsVehicleType
      default:
        return []
    }
  }

  const radioItems = getRadioItems()

  const isTouched = props.control.touched[`${props.name}`]
  const error = props.control.errors[`${props.name}`]
  const value = props.isControlledManually ? props.value : props.control.values[`${props.name}`]

  return (
    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : '') : ''}
      help={isTouched ? error : ''}
    >
      <Radio.Group
        size={'large'}
        value={value}
        name={props.name}
        buttonStyle='solid'
        onChange={(e) => props.control.handleInputChange(props.name, e.target.value)}
      >
        {radioItems.map((item) => (
          <Radio.Button key={item.value} value={item.value}>
            {' '}
            {item.label}{' '}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  )
}
