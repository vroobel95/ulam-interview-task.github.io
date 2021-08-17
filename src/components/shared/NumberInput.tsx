import "./NumberInput.scss";

import React from "react";
import classNames from "classnames";
import { Field } from "formik";

interface NumberInputProps {
  for: string;
  className: string;
  text: string;
  error?: string;
  touched?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const inputClassName = classNames("number-input", props.className, {
    "not-valid": props.touched && props.error,
  });
  return (
    <div className={inputClassName}>
      <div className="label-and-value">
        <label htmlFor={props.for}>{props.text}</label>
        <Field name={props.for} type="number" />
      </div>
      {props.error && props.touched ? (
        <div className="error">{props.error}</div>
      ) : (
        <div className="error" />
      )}
    </div>
  );
};

export default NumberInput;
