import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();
  const handleAddContact = (values, actions) => {
    const { name, number } = values;

    const addNewContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addContact(addNewContact);

    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is the required!"),
    number: Yup.string()
      .min(3, "Error in the number")
      .max(50, "Error in the number")
      .required("Number is required!"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleAddContact}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage component="span" name="name" />
        </div>

        <div className={css.container}>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage component="span" name="number" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
