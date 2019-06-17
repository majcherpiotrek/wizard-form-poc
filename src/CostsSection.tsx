import * as React from "react";
import { FieldArray, FieldArrayFieldsProps } from "redux-form";
import { renderCostInput } from "./CostInput";
import { CostFormData } from "./types";
import { Button } from "@material-ui/core";

interface Props {
  name: string;
}
interface CostsProps {
  fields: FieldArrayFieldsProps<CostFormData>;
}

const renderCosts = (param: CostsProps) => (
  <React.Fragment>
    <Button
      type="button"
      title="Add cost"
      onClick={() => param.fields.push({ quantity: 0, value: 0, comment: "" })}
    >
      Add Cost
    </Button>
    <ul>{param.fields.map(renderCostInput)}</ul>
  </React.Fragment>
);

export const CostsSection: React.FC<Props> = props => (
  <FieldArray name={props.name} component={renderCosts} props={{}} />
);
