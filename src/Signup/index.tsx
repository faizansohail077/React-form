import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./Signup.css";

// interface signup {
//   firstName: string;
//   lastName: string;
//   email: string;
//   contact: number;
//   Address: string;
// }

// const initialValues1: signup = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: 0,
//   Address: "",
// };

function Signup({ submit, setFormValues, value }: any) {
  return (
    <Formik
      initialValues={value}
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
        submit(1);
        setFormValues({ ...values, ...value });
      }}
    >
      <Form>
        <div className="form">
          <div>
            <label htmlFor="firstName" className="form__label">firstName</label>
            <Field className="form__input" name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName" className="form__label">lastName</label>
            <Field className="form__input" name="lastName" type="lastName" />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label htmlFor="email" className="form__label">email</label>
            <Field className="form__input" name="email" type="text" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="contact" className="form__label">contact</label>
            <Field className="form__input" name="contact" type="number" />
            <ErrorMessage name="contact" />
          </div>
          <div>
            <label htmlFor="Address" className="form__label">Address</label>
            <Field className="form__input" name="Address" type="text" />
            <ErrorMessage name="Address" />
          </div>
          <button  className="btn" type="submit">submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default Signup;
