import { Link, useSearchParams } from "react-router"

import { Button } from "@/components/ui/button"
import { Form, Input } from "@/components/ui/form"
import { paths } from "@/config/paths"
import { useLogin } from "@/lib/auth"

import { loginInputSchema } from "../types/form"

type LoginFormProps = {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  })
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get("redirectTo")

  return (
    <div>
      <Form
        onSubmit={(values) => {
          login.mutate(values)
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="Username"
              error={formState.errors["username"]}
              registration={register("username")}
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div>
              <Button
                disabled={login.isPending}
                type="submit"
                className="w-full"
              >
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to={paths.auth.register.getHref(redirectTo)}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
