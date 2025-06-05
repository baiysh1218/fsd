import { Input } from "@/shared/ui/input";
import styles from "./styles.module.scss";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder="username" />
    </div>
  );
};
