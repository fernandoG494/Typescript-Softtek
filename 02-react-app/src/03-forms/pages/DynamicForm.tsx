import { Formik, Form } from 'formik';
import { Select, TextInput } from '../components';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json'; 

const initialValues: {[keys: string]: any} = {};
const requireFields: {[keys: string]: any} = {};

for (const input of formJson) {
  initialValues[ input.name ] = input.value
  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if(rule.type === 'required'){
      schema = schema.required('Este campo es requerido')
    }

    if(rule.type === 'minLength'){
      schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value} caracteres`);
    }

    if(rule.type === 'minLength'){
      schema = schema.email( `Revise el formato del email`);
    }
  }
  requireFields[input.name] = schema;
};

const validationSchema = Yup.object({ ...requireFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            { formJson.map(({ type, name, placeholder, label, options}) => {
                if (type === 'input' || type === 'password' || type === 'email') {
                  return(
                    <TextInput
                      key={ name }
                      type={( type as any )}
                      name={ name }
                      label={ label }
                      placeholder={ placeholder }
                    />
                  )
                } else if (type === 'select') {
                  return(
                    <Select
                      key={ name }
                      label={ label }
                      name={ name }
                    >
                      <option value=''>Select an option</option>
                      {
                        options?.map(({ id, label }) => (
                          <option key={ id } value={ id }>{ label }</option>
                        ))
                      }
                    </Select>
                  )
                }
                throw new Error(`El type: ${ type }, no es soportado`);
              })
            }

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
