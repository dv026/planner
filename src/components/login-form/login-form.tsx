import { cx } from "@emotion/css"
import { Formik, useFormik } from "formik"
import { authApi } from "../../api/auth"
import { emailRegexp } from "../../constants/email-regexp"
import { Button } from "../button"
import { Input } from "../input"
import { styles } from "./styles"

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: any = {}
      // if (!values.email.match(emailRegexp)) {
      //   errors.email = "email should be correct"
      // }

      // if (values.password.length < 4) {
      //   errors.password = "length must be more 3"
      // }
      return errors
    },
    onSubmit: (values) => {
      if (isNoError) {
        authApi.login("").then((response) => console.log(response))
      }
      console.log(values)
    },
  })

  const showEmailError =
    Boolean(formik.touched.email) && Boolean(formik.errors.email)
  const showPasswordError =
    Boolean(formik.touched.password) && Boolean(formik.errors.password)

  const isNoError =
    !Boolean(formik.errors.email) && !Boolean(formik.errors.password)

  return (
    <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
      <div className={styles.inputs}>
        <div className={styles.formElement}>
          <Input
            name="email"
            placeholder="email"
            className={cx({ [styles.input]: showEmailError })}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className={styles.error}>
            {showEmailError && <div>- {formik.errors.email}</div>}
          </span>
        </div>
        <div className={styles.formElement}>
          <Input
            name="password"
            placeholder="password"
            type="password"
            className={cx({ [styles.input]: showPasswordError })}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <span className={styles.error}>
            {showPasswordError && <div>- {formik.errors.password}</div>}
          </span>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
