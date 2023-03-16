import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./contexts/auth"

import Main from "./layouts/Main"
import Error from "./pages/error"
import LandingPage from "./pages/landingpage"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Dashboard from "./pages/dashboard"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "logout",
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ])
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
