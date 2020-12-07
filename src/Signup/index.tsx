import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface signup {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  Address: string;
}


const initialValues: signup = {
  firstName: "",
  lastName: "",
  email: "",
  contact: 0,
  Address: "",
};

function Signup({submit}:any) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required FirstName")
          .max(10, "Should be less than 10"),
        lastName: Yup.string()
          .required("Required LastName")
          .max(10, "Should be less than 10"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required Email"),
        contact: Yup.string().min(2, "Required Contact"),
        Address: Yup.string().required("Required Address"),
      })}
      onSubmit={(values) => {
        console.log(values);
        submit(1)
      }}
    >
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
  );
}

export default Signup;
