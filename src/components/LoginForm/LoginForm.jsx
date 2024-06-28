import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import toast, { Toaster} from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";


export default function LoginForm() { 
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
    .unwrap()
      .then(() => {})
      .catch((err) => {
        console.log(err);
        toast.error("Oops, something went wrong...");
      });
    actions.resetForm();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />    
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input}/>
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
      </Formik>
      </div>
  );
}
