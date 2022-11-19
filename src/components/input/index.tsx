import { HTMLProps } from "react"

import { styles } from "./styles"

export const Input: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
  return <input {...props} className={styles.input} />
}
