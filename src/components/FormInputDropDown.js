import React, { Component, useEffect } from 'react'
import { Select } from 'antd'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'
import { DropDownConstants } from '../../assets/constants/GeneralConstants'
import PrivilegeAction from '../../stores/user-management/privilege/PrivilegeAction'
import BaseRequest from '../../stores/special/models/BaseRequest'
import { selectDropDownItems } from '../../selectors/DropDownDataSelector'
import CommunityAction from '../../stores/property-management/community/CommunityAction'
import BuildingAction from '../../stores/property-management/building/BuildingAction'
import GetBuildingsRequest from '../../stores/property-management/building/request/GetBuildingsRequest'
import BillAction from '../../stores/money-management/bill/BillAction'
import { GetBillTypeRequest } from '../../stores/money-management/bill/requests/GetBillTypeRequest'
import ExpenseAction from '../../stores/money-management/expense/ExpenseAction'
import { GetExpenseTypeRequest } from '../../stores/money-management/expense/requests/GetExpenseTypeRequest'
import UserAction from '../../stores/user-management/user/UserAction'
import GetUsersRequest from '../../stores/user-management/user/requests/GetUsersRequest'

const { Option } = Select

export default function FormInputDropdown(props) {


  const dropDownItems = useSelector((state) => selectDropDownItems(state, props.dropDownFor))

  const isTouched = props.control.touched[`${props.name}`]
  const error = props.control.errors[`${props.name}`]
  const value = props.control.values[`${props.name}`]

  return (
    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={isTouched ? (error ? 'error' : 'success') : ''}
      help={isTouched ? error : ''}
    >
      <Select
        placeholder={props.label}
        showSearch
        style={{ width: '100%' }}
        optionFilterProp='children'
        size={'large'}
        value={value}
        onChange={(selectedValue) => props.control.handleInputChange(props.name, selectedValue)}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {dropDownItems.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )
}
