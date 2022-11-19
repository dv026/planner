import { Button } from "../button"
import { Input } from "../input"
import { styles } from "./styles"

export const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.inputs}>
        <Input placeholder="email" />
        <Input placeholder="password" type="password" />
      </div>
      <Button>Submit</Button>
    </div>
  )
}
