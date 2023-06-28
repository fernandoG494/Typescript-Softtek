import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormkBasicPage = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik basic tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={ handleChange }
          value={ values.firstName }
        />
        <span>Firstname is required</span>

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={ handleChange }
          value={ values.lastName }
        />
        <span>Lastname is required</span>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          onChange={ handleChange }
          value={ values.email }
        />
        <span>Email is required</span>
        <span>Check your email for a valid format</span>

        <button type='submit'>Submit</button>
      </form>      
    </div>
  )
};
