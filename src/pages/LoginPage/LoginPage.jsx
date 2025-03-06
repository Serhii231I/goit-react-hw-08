import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={css.formContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h3 className={css.header}>Login</h3>
          <label className={css.label}>
            <span className={css.span}>Email:</span>
            <Field name="email" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button className={css.button} type="submit">
            Login
          </button>
          <p className={css.text}>
            You still have not account?
            <Link to="/register"> Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginPage;
