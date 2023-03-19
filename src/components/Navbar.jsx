import React from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/auth"

const Navbar = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  async function handleSignOut() {
    await signOut()
    navigate("/")
  }
  function handleLogin() {
    navigate("/login")
  }
  function handleSignup() {
    navigate("/signup")
  }

  return (
    <div className="flex py-2 px-4 justify-between items-center">
      <div className="flex justify-start py-2 px-4 items-center">
        <Link
          className="font-thin text-md cursor-pointer py-2 px-4 w-fit bg-amber-700 text-white hover:underline hover:border-4 hover:border-orange-500 transition-all duration-300"
          to="/"
        >
          Home
        </Link>
      </div>
      {user && (
        <div className="flex justify-center py-2 px-4 items-center">
          <div className="text-xl">Hello, you are logged in!</div>
        </div>
      )}
      <div className="flex py-2 px-4 justify-end items-center">
        {user ? (
          <div
            className="font-thin text-md cursor-pointer py-2 px-4 w-fit bg-amber-700 text-white hover:underline hover:border-4 hover:border-orange-500 transition-all duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        ) : (
          <>
            {/* <div
              onClick={handleSignup}
              className="font-thin text-md cursor-pointer py-2 px-4 mr-4 w-fit bg-amber-700 text-white hover:underline hover:border-4 hover:border-orange-500 transition-all duration-300"
            >
              Signup
            </div> */}
            <div
              onClick={handleLogin}
              className="font-thin text-md cursor-pointer py-2 px-4 w-fit bg-amber-700 text-white hover:underline hover:border-4 mr-4 hover:border-orange-500 transition-all duration-300"
            >
              Login
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
