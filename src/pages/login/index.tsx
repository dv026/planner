import { LoginForm } from "../../components/login-form/login-form"
import { Logo } from "../../components/logo"

import { styles } from "./styles"

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftContainer}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.rightContainer}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
