import React from "react";
import styles from "./Button.module.css";

const Button = ({ role }: { role: string }) => {
  return (
    <button className={styles.register__container_form_content_button}>
      {role}
    </button>
  );
};

export default Button;
