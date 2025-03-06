import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={css.formContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h3 className={css.header}>Register</h3>
          <label className={css.label}>
            <span className={css.span}>Name:</span>
            <Field name="name" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Email:</span>
            <Field name="email" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Password</span>
            <Field name="password" type="password" />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
          <p className={css.text}>
            Already have an account?
            <Link to="/login"> Log In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationPage;
