import { useEffect, useState } from 'react'
import cogoToast from 'cogo-toast'
// eslint-disable-next-line no-unused-vars
import { ObjectSchema } from 'yup'

export default function useFormInputValidation(INITIAL_STATE = {}, validationSchema: ObjectSchema) {
  const [values, setValues] = useState(INITIAL_STATE)
  const [touched, setTouched] = useState({})
  const [hasError, setHasError] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange: (name: string, value: string) => void = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value
    })
    setTouched({
      ...touched,
      [name]: true
    })
  }

  const setAllValues = (newValues: object) => {
    setValues(newValues)
  }

  const setValue = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit: (onSubmit: () => void) => void = (onSubmit: () => void) => {
    if (!hasError) {
      onSubmit()
    } else {
      const touched = {}
      Object.keys(INITIAL_STATE).map((key) => {
        touched[key] = true
      })
      setTouched(touched)
      cogoToast.error('Please fill up all the required fields')
    }
  }

  const handleImageChange = (name: string, imageFile: any) => {
    if (imageFile.status !== 'error') {
      _getBase64(imageFile.originFileObj, (binaryFile: string | ArrayBuffer | null) => {
        setValues({
          ...values,
          [name]: binaryFile
        })
      })
    }
  }

  const _getBase64 = (img: any, callback: (binaryFile: string | ArrayBuffer | null) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  useEffect(() => {
    validateData()
  }, [values])

  const validateData = () => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        setErrors({})
        setHasError(false)
      })
      .catch((err: any) => {
        const errorObject = {}
        err.inner.forEach((item: any) => (errorObject[item.path] = item.message))
        setErrors(errorObject)
        setHasError(true)
      })
  }

  const resetData = () => {
    setTouched({})
    setValues(INITIAL_STATE)
  }

  return {
    values,
    hasError,
    errors,
    touched,
    handleSubmit,
    handleInputChange,
    setValue,
    // handleImageChange,
    resetData,
    setValues,
    control: {
      values,
      handleSubmit,
      handleInputChange,
      touched,
      errors,
      setValue,
      setAllValues,
      resetData,
      handleImageChange
    }
  }
}
