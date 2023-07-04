import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { CheckBox, Select, TextInput } from '../components';

import '../styles/styles.css';

export const FormkAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Debe tener máximo 15 caracteres').required('Requerido'),
          lastName: Yup.string().max(15, 'Debe tener máximo 15 caracteres').required('Requerido'),
          email: Yup.string().email('Formato de email incorrecto').required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string().notOneOf(['it-jr', 'Esta opción no es permitida']).required('Requerido')
        })}
      >
        { (formik) => (
            <Form>
              <TextInput label='Nombre' name='firstName' placeholder='Tu nombre'/>
              <TextInput label='Apellido' name='lastName' placeholder='Tu apellido'/>
              <TextInput label='Correo' name='email' placeholder='Correo' type='email'/>

              <Select label={'Rol'} name={'jobType'} >
                <option value=''>Selecciona un rol</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>IT Senior</option>
                <option value='it-junior'>IT Junior</option>
              </Select>

              <CheckBox label={'Términos y condiciones'} name={'terms'} />
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>      
    </div>
  )
};
