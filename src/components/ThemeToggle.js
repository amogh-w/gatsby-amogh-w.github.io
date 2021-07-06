import React from "react"
import useDarkMode from "use-dark-mode"

const ThemeToggle = () => {
  const theme = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "darkMode",
  })

  return (
    <div>
      <button onClick={theme.toggle}>
        {theme.value ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}

export default ThemeToggle
