import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "../ContactForm/ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDublicate = contacts.some(
      (contact) =>
        contact.name && contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isDublicate) {
      {
        alert(`${values.name} is already in contacts`);
        return;
      }
    }
    const newContact = { ...values };
    dispatch(addContact(newContact));
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(20, "Max 20 characters")
      .required("This field is required"),
    number: Yup.string()
      .min(7, "Min 7 characters")
      .required("This field is required"),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.labelText}>Name</span>
            <Field className={s.input} name="name" type="text" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span className={s.labelText}>Number</span>
            <Field className={s.input} name="number" type="tel" />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button type="submit" className={s.submitBtn}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
