import React from "react";
import preclinicLogo from "../../assets/images/Icon.svg";
import styles from "../Logo/Logo.module.css";

const Logo = () => {
  return (
    <>
      <h1 className={styles.logo}>
        <img src={preclinicLogo} alt="preclinic logo" width={48} />
        Preclinic
      </h1>
    </>
  );
};

export default Logo;
