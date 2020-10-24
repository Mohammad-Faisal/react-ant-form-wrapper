import * as React from 'react'

export const FormContext = React.createContext({
  touched: {},
  errors: {},
  values: {},
  handleInputChange(name: any, value: any) {
    console.log(name, value)
  },
  handleSubmit(onSubmit: () => void) {
    onSubmit()
  }
})
