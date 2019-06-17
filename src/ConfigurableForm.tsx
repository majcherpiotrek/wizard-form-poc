import React from "react";
import { reduxForm, FormSection, InjectedFormProps } from "redux-form";
import { Activity } from "./Activity";
import { FormDescription } from "./formDescription";
import { Group } from "./Group";

type OwnProps = {
  config: FormDescription;
};

const FormInternal: React.FC<
  OwnProps & InjectedFormProps<{}, OwnProps>
> = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {props.config.groups.map((group, index) => (
        <Group key={index} group={group} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

const ConfigurableForm = reduxForm<{}, OwnProps, string>({
  // a unique name for the form
  form: "configurableForm"
})(FormInternal);

export default ConfigurableForm;
