import React, { useContext } from 'react'
import { Button } from 'antd'
import FormContext from './FormContext'
import { CheckOutlined } from '@ant-design/icons'

interface Props {
  isRequesting?: boolean
  onSubmit: () => void
}

export default function FormSubmitButton(props: Props) {
  const control = useContext(FormContext)

  return (
    <Button
      style={{ marginTop: '10px', width: '100%' }}
      size='large'
      loading={props.isRequesting}
      className='btn-green'
      onClick={() => control.handleSubmit(props.onSubmit)}
      icon={<CheckOutlined />}
    >
      Submit
    </Button>
  )
}
