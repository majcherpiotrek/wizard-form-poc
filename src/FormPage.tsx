import * as React from "react";
import ConfigurableForm from "./ConfigurableForm";
import { getFormDescription, FormDescription } from "./formDescription";

class FormPage extends React.PureComponent<{}, FormDescription> {
  readonly state = {
    groups: []
  };

  componentDidMount() {
    getFormDescription().then((formDesc: FormDescription) =>
      this.setState(formDesc)
    );
  }
  submit = (values: any) => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.groups.length > 0 && (
          <ConfigurableForm onSubmit={this.submit} config={this.state} />
        )}
      </React.Fragment>
    );
  }
}

export { FormPage };
