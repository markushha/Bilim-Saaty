import { Formik } from "formik";
import { Input } from "@/app/components/shadcn/input";
import { Button } from "@/app/components/shadcn/button";
import AuthLayout from "@/app/layout/AuthLayout"

function SignIn() {
  return (
    <AuthLayout title="Вход">
      <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {} as { email: string; password: string };
              if (!values.email) {
                errors.email = "Пожалуйста, введите почту";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className="mx-auto w-[40%] flex flex-col w-full"
                onSubmit={handleSubmit}
              >
                <Input
                  placeholder="Почта"
                  className="dark:bg-slate-900 bg-slate-200 shadow-lg w-full"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label className="px-2 text-sm mt-2 font-semibold text-rose-500">
                  {errors.email && touched.email && errors.email}
                </label>
                <Input
                  placeholder="Пароль"
                  className="dark:bg-slate-900 bg-slate-200 shadow-lg mt-4 w-full"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <label className="px-2 text-sm mt-2 font-semibold text-rose-500">
                  {errors.password && touched.password && errors.password}
                </label>

                <Button className="mt-4" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
      </Formik>
    </AuthLayout>
  )
}

export default SignIn
