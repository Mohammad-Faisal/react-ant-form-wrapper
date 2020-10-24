import React from 'react'
import useFormInputValidation from './useFormInputValidation'
import { FormContext } from '../components/FormContext'

export default function withForm(
  FormComponent: any,
  INITIAL_STATE: any,
  VALIDATION_SCHEMA: any
) {
  return (props: any) => {
    const { control, values } = useFormInputValidation(
      INITIAL_STATE,
      VALIDATION_SCHEMA
    )

    // useEffect( () => control.resetData() , [triggerClear] );

    // @ts-ignore
    return (
      <FormContext.Provider value={control}>
        <FormComponent control={control} values={values} {...props} />
      </FormContext.Provider>
    )
  }
}
