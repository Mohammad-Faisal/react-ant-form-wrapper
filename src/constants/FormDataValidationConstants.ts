import * as Yup from 'yup'
export default class FormDataValidationConstants {
    static REQUIRED_VALID_MOBILE_NUMBER = Yup.string()
        .matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/, {
            message: 'Mobile Number Invalid',
            excludeEmptyString: true
        })

        .required('Mobile Number is Required')

    static REQUIRED_VALID_EMAIL = Yup.string()
        .matches(/^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, {
            message: 'Invalid Email',
            excludeEmptyString: true
        })
        .required('Email is Required')

    static VALID_MOBILE_NUMBER = Yup.string().matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/, {
        message: 'Mobile Number Invalid',
        excludeEmptyString: true
    })

    static VALID_EMAIL = Yup.string().matches(/^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, {
        message: 'Email Invalid',
        excludeEmptyString: true
    })

    static DIGIT_ONLY = Yup.string().matches(/^-?[0-9]*(\.[0-9]*)?$/, {
        message: 'Only Digits allowed',
        excludeEmptyString: true
    })

    static REQUIRED_AND_DIGIT_ONLY = Yup.string()
        .matches(/^-?[0-9]*(\.[0-9]*)?$/, {
            message: 'Only Digits allowed',
            excludeEmptyString: true
        })
        .required('This Field is Required')

    // @ts-ignore
    static REQUIRED_AND_STRING_ONLY = Yup.string({
        message: 'Digits not allowed',
        excludeEmptyString: true
    }).required('This Field is Required')
}
