import * as React from 'react'

const FormContext = React.createContext({
    touched: {},
    errors: {},
    values: {},
    handleInputChange(name: any, value: any) {
        console.log(name, value)
    },
    handleSubmit(onSubmit: () => void) {
        onSubmit()
    },
    resetData() {}
})

export default FormContext
