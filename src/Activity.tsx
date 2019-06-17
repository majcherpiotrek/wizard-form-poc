import * as React from "react";
import { CostsSection } from "./CostsSection";

interface Props {
  label: string;
  costSectionNames: Array<string>;
  name: string;
}

export const Activity: React.FC<Props> = props => (
  <React.Fragment>
    <h2>{props.label}</h2>
    {props.costSectionNames.map(sectionName => (
      <CostsSection
        name={`${props.name}.${sectionName}`}
        key={`${props.name}.${sectionName}`}
      />
    ))}
  </React.Fragment>
);
