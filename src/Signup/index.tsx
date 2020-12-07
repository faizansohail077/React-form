import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

interface Signup {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  Address: string
}

const initialValues: Signup = {
  firstName: '', lastName: '', email: '', contact: 0, Address: '' 
}

function Signup() {

  return (
    <Formik
      initialValues={ initialValues}
      validationSchema={Yup.object({firstName: Yup.string().required('reuired'),lastName: Yup.string().required('reuired'),email: Yup.string().required('reuired'),contact: Yup.string().required('reuired'),Address: Yup.string().required('reuired')})}
      onSubmit={values => { console.log(values) }}> 

      <Form>
        <div>
         <label htmlFor="firstName">firstName</label>
         <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </div>
        <div>
         <label htmlFor="lastName">lastName</label>
         <Field name="lastName" type="lastName" />
          <ErrorMessage name="lastName" />
        </div>
        <div>
         <label htmlFor="email">email</label>
         <Field name="email" type="text" />
          <ErrorMessage name="email" />
        </div>
        <div>
         <label htmlFor="contact">contact</label>
         <Field name="contact" type="number" />
          <ErrorMessage name="contact" />
        </div>
        <div>
         <label htmlFor="Address">Address</label>
         <Field name="Address" type="text" />
          <ErrorMessage name="Address" />
          </div>
        
      <button>submit</button>
      </Form>

   </Formik>
  )
}

export default Signup
