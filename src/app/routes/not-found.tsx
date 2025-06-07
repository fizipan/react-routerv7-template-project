import { useNavigate } from "react-router"

import { Head } from "@/components/seo"
import { Button } from "@/components/ui/button"
import { paths } from "@/config/paths"

const NotFoundRoute = () => {
  const navigate = useNavigate()
  return (
    <>
      <Head title="Oops! Page Not Found!" />
      <div className="h-svh w-full">
        <div className="mx-auto flex size-full flex-col items-center justify-center gap-2">
          <h1 className="text-[7rem] leading-tight font-bold">404</h1>
          <div className="w-80 text-center">
            <span className="font-medium">Oops! Page Not Found!</span>
            <p className="text-muted-foreground text-center text-sm">
              The page you are looking for does not exist.
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(paths.home.path)}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundRoute
