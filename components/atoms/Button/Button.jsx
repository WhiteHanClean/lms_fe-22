import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, className, ...props }) => {
  console.log(className);
  const custom_styles = `${styles.default_button} ${className}`;
  return (
    <button className={custom_styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
