import { lazy, PropsWithChildren, Suspense } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { Layout } from "../layout"
import { LoginLayout } from "../login-layout"

const LoginPage = lazy(() => import("../pages/login"))

const HomePage = lazy(() => import("../pages/home"))

const ErrorPage = lazy(() => import("../pages/error"))

const ProtectedRoute: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const auth = true
  if (!auth) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

const NoAuthRoute: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const auth = false
  if (auth) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

// TODO: we use hash for gh-pages only
// it does not support spa
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Suspense fallback="loading...">
          <Layout />
        </Suspense>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "contacts/:contactId",
        element: <div>contacts123</div>,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <NoAuthRoute>
        <Suspense fallback="loading...">
          <LoginLayout />
        </Suspense>
      </NoAuthRoute>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
])
