import * as React from "react";
import ContactForm from "./ContactForm";

class ContactPage extends React.Component {
  submit = (values: any) => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export { ContactPage };
