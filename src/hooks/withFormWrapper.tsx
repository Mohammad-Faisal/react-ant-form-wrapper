import React from 'react'
import useFormInputValidation from './useFormInputValidation'
import FormContext from '../components/FormContext'
import { ObjectSchema } from 'yup'

export default function withForm(FormComponent: any, INITIAL_STATE: object, VALIDATION_SCHEMA: ObjectSchema) {
    return (props: any) => {
        const { control, values, resetData } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)

        // useEffect( () => control.resetData() , [triggerClear] );

        return (
            <FormContext.Provider value={control}>
                <FormComponent control={control} resetData={resetData} values={values} {...props} />
            </FormContext.Provider>
        )
    }
}
