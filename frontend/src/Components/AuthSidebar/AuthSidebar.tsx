import doctors from "../../assets/images/img.svg";
import React from "react";
import styles from "./AuthSidebar.module.css";

const AuthSidebar = () => {
  return (
    <section className={styles.card}>
      <h2>seamless healthcare access with smart,modern clinic</h2>
      <p>
        Experience efficient,secure and user-friendly healthcare management
        designed for modern clinics and growing practices
      </p>
      <span className={styles.glow}></span>
      <span className={styles.wave}></span>

      <img
        src={doctors}
        alt="A doctor and patient standing while a doctor look at some file"
      />
    </section>
  );
};

export default AuthSidebar;
