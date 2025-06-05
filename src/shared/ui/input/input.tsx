import { forwardRef } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
  label?: string;
  inputSize?: "base" | "small" | "large";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, inputSize = "base", ...props }, ref) => {
    return (
      <div
        className={clsx(styles.inputWrapper, styles[inputSize], {
          [styles.error]: error,
        })}
      >
        {label && <label>{label}</label>}
        <input ref={ref} {...props} type="text" />
        {error && (
          <span style={{ color: "red" }}>
            {typeof error === "string" ? error : "Invalid input"}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
