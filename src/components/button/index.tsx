import React from "react"
import { ButtonSizes, ButtonVariants } from "./types"

import { styles } from "./styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = ButtonSizes.MEDIUM,
  variant = ButtonVariants.NORMAL,
  ...props
}) => {
  return (
    <button className={styles.button(size)} {...props}>
      {children}
    </button>
  )
}
