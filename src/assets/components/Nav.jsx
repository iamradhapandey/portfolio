// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 transition-all"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeToggle
