import "./Button.scss";

import Icon from "@iconify/react";
import React from "react";
import classNames from "classnames";
import MaterialButton from "@material-ui/core/Button";

type ButtonVariant = "close" | "submit";
type ButtonType = "submit" | "button" | "reset";

interface ButtonProps {
  text?: string;
  className: string;
  icon?: object;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassName = classNames("button", [
    props.className,
    props.variant?.toString(),
  ]);
  return (
    <MaterialButton
      className={buttonClassName}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      variant={props.variant === "close" ? "outlined" : "contained"}
    >
      {props.icon ? <Icon icon={props.icon} /> : null}
      {props.text ? <span className="button-label">{props.text}</span> : null}
    </MaterialButton>
  );
};

export default Button;
