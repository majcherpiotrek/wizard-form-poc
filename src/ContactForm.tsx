import React from "react";
import { Field, reduxForm } from "redux-form";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  handleSubmit: (values: any) => void;
}

const ContactFormInternal: React.FC<Props> = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactFormInternal);

export default ContactForm;
