import React from "react";
import s from "./Button.module.scss";

const Button = ({ children, className, ...props }) => {
  console.log(className);
  const custom_styles = `${s.default_button} ${className}`;
  return (
    <button className={custom_styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
