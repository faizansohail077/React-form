import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// interface payment {
//   cardName: string;
//   cardNumber: number;
// }
// const initialValues1: payment = { cardName: "", cardNumber: 0 };

function Payment({ submit ,setFormValues,value}: any) {
  return (
    <Formik
      initialValues={value}
      validationSchema={Yup.object({
        cardName: Yup.string().required("Must Provide Card Name"),
        cardNumber: Yup.number().min(1, "Must Provide card Number"),
      })}
      onSubmit={(values) => {
        console.log(values);
        submit(2);
        setFormValues({...value,...values})
      }}
    >
      <Form>
        <div className="form">
        <div>
          <label htmlFor="cardName" className="form__label">CardName : </label>
          <Field type="text" className="form__input" name="cardName" />
          <ErrorMessage name="cardName" />
        </div>
        <div>
          <label htmlFor="cardNumber" className="form__label">cardNumber : </label>
          <Field type="text" className="form__input" name="cardNumber" />
          <ErrorMessage name="cardNumber" />
        </div>
        <button className='btn'>submit</button>
          <button  className='btn' type="submit" onClick={() => submit(0)}>back</button>
          </div>
      </Form>
    </Formik>
  );
}

export default Payment;
