import { Button } from "../ui/button/button"

export const MainErrorFallback = () => {
  return (
    <div className="h-svh w-full">
      <div className="mx-auto flex size-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">500</h1>
        <div className="w-80 text-center">
          <span className="font-medium">Oops! Something went wrong!</span>
          <p className="text-muted-foreground text-center text-sm">
            Terjadi kesalahan pada aplikasi. Silakan coba lagi nanti.
          </p>
        </div>
        <div className="mt-6">
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  )
}
