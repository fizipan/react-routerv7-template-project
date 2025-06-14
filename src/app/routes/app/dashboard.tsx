import { ContentLayout } from "@/components/layouts"
import { useUser } from "@/lib/auth"

const DashboardRoute = () => {
  const user = useUser()
  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">
        Welcome <b>{`${user.data?.data?.name}`}</b>
      </h1>
      <h4 className="my-3">Phone number: {user.data?.data?.phone_number}</h4>
      <p className="font-medium">In this application you can:</p>
    </ContentLayout>
  )
}

export default DashboardRoute
