import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface payment {
  cardName: string;
  cardNumber: number;
}
const initialValues: payment = { cardName: "", cardNumber: 0 };

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
        setFormValues({...values,...value})
      }}
    >
      <Form>
        <div>
          <label htmlFor="cardName">CardName : </label>
          <Field type="text" name="cardName" />
          <ErrorMessage name="cardName" />
        </div>
        <div>
          <label htmlFor="cardNumber">cardNumber : </label>
          <Field type="text" name="cardNumber" />
          <ErrorMessage name="cardNumber" />
        </div>
        <button>submit</button>
        <button onClick={() => submit(0)}>back</button>
      </Form>
    </Formik>
  );
}

export default Payment;
