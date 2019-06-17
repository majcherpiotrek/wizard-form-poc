import * as React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Field, WrappedFieldProps, FieldArrayFieldsProps } from "redux-form";
import { CostFormData } from "./types";

const required = (value: number | undefined) =>
  value === undefined ? undefined : "Required";
const greaterThanZero = (value: number) =>
  value < 0 ? "Has to be greater than 0!" : undefined;

const renderTextField = (
  param: { label: string; type: string } & WrappedFieldProps
) => (
  <TextField
    type={param.type}
    label={param.label}
    placeholder={param.label}
    error={param.meta.touched && param.meta.invalid}
    {...param.input}
  />
);

export const renderCostInput = (
  name: string,
  index: number,
  fields: FieldArrayFieldsProps<CostFormData>
) => (
  <li>
    <Grid container direction="row" key={index}>
      <Grid item xs={3}>
        <Field
          name={`${name}.quantity`}
          type="number"
          label="Quantity"
          component={renderTextField}
        />
      </Grid>
      <Grid item xs={3}>
        <Field
          name={`${name}.value`}
          type="number"
          label="Value"
          component={renderTextField}
        />
      </Grid>
      <Grid item xs={3}>
        <Field
          name={`${name}.comment`}
          type="text"
          label="Comment"
          component={renderTextField}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          type="button"
          title="Delete"
          size="medium"
          onClick={() => fields.remove(index)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  </li>
);
