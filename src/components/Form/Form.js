import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { Form as BootstrapForm } from "react-bootstrap";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required!"),
  name: yup
    .string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
});

const Form = ({ formID, item, submitHandler }) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitHandler}
      initialValues={{
        email: item?.email || "",
        name: item?.name || "",
      }}
    >
      {({ handleSubmit }) => (
        <BootstrapForm noValidate onSubmit={handleSubmit} id={formID}>
          <Field name="name">
            {({ field, meta }) => (
              <BootstrapForm.Group controlId="name">
                <BootstrapForm.Label>Name</BootstrapForm.Label>
                <BootstrapForm.Control
                  value={field.value}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    field.onChange(e);
                    field.onBlur(e);
                  }}
                  isInvalid={meta.touched && !!meta.error}
                  isValid={meta.touched && !meta.error}
                />
                {meta.touched && !!meta.error && (
                  <BootstrapForm.Control.Feedback type="invalid">
                    {meta.error}
                  </BootstrapForm.Control.Feedback>
                )}
              </BootstrapForm.Group>
            )}
          </Field>
          <Field name="email">
            {({ field, meta }) => (
              <BootstrapForm.Group controlId="email">
                <BootstrapForm.Label>Email</BootstrapForm.Label>
                <BootstrapForm.Control
                  value={field.value}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    field.onChange(e);
                    field.onBlur(e);
                  }}
                  isInvalid={meta.touched && !!meta.error}
                  isValid={meta.touched && !meta.error}
                />
                {meta.touched && !!meta.error && (
                  <BootstrapForm.Control.Feedback type="invalid">
                    {meta.error}
                  </BootstrapForm.Control.Feedback>
                )}
              </BootstrapForm.Group>
            )}
          </Field>
        </BootstrapForm>
      )}
    </Formik>
  );
};

export default Form;
