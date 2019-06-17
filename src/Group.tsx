import * as React from "react";
import { GroupDescription } from "./formDescription";
import { FormSection } from "redux-form";
import { Activity } from "./Activity";

interface Props {
  group: GroupDescription;
}

export const Group: React.FC<Props> = props => (
  <div>
    <h1>{props.group.label}</h1>
    <FormSection name={props.group.name}>
      {props.group.activities.map((activity, index) => (
        <Activity
          key={index}
          //name={index.toString()}
          name={activity.name}
          label={activity.label}
          costSectionNames={activity.costsSections}
        />
      ))}
    </FormSection>
  </div>
);
