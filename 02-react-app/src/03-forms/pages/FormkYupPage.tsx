import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormkYupPage = () => {
  const { errors, getFieldProps, handleSubmit, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Debe tener máximo 15 caracteres').required('Requerido'),
      lastName: Yup.string().max(15, 'Debe tener máximo 15 caracteres').required('Requerido'),
      email: Yup.string().email('Formato de email incorrecto').required('Requerido'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Yup tutorial</h1>
      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...getFieldProps('firstName')} />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...getFieldProps('lastName')} />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor='email'>Email</label>
        <input type='email' {...getFieldProps('email')}/>
        { touched.email && errors.email && <span>{ errors.email }</span> }

        <button type='submit'>Submit</button>
      </form>      
    </div>
  )
};
