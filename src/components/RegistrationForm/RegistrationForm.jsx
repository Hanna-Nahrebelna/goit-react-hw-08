import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";

// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {

  // const handlSubmit = (value, actions) => { 
  //   dispatch(register(value));
  //   actions.resetForm();
  // }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.buttom}>Register</button>
      </Form>
    </Formik>
  );
}