import { HTMLProps, useState } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ className, ...rest }: ButtonProps) {
  const [clicked, setCliked] = useState(false);

  return (
    <button
      className={`${styles.button} ${className}`}
      {...rest}
      onClick={() => setCliked(!clicked)}
    >
      {clicked ? "Clicked" : "Click Me"}
    </button>
  );
}
