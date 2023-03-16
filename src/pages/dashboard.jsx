import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/auth"

const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return <div>I am the Dashboard</div>
}

export default Dashboard
