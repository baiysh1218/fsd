import LoginLeftImage from "@assets/images/LoginLeftImage.png";

import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rigth_image}>
        <img src={LoginLeftImage} alt="image" />
      </div>
      <div className={styles.form}>
        <Outlet />
      </div>
    </div>
  );
};
