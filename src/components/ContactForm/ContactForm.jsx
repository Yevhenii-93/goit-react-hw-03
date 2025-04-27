import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();
  const handleAddContact = (values, actions) => {
    const { userName, userNumber } = values;

    const addNewContact = {
      id: nanoid(),
      name: userName,
      number: userNumber,
    };

    addContact(addNewContact);

    actions.resetForm();
  };

  const ContactShema = Yup.object().shape({
    userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    userNumber: Yup.number()
      .min(9, "Error in the number")
      .max(9, "Error in the number")
      .required("Number is required!"),
  });

  return (
    <Formik
      initialValues={{ userName: "", userNumber: "" }}
      onSubmit={handleAddContact}
      validationSchema={ContactShema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="userName" id={nameId} />

        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="userNumber" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
