import React from "react"
import useDarkMode from "use-dark-mode"

import { MdBrightness2, MdBrightness5 } from "react-icons/md"

const ThemeToggle = () => {
  const theme = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "darkMode",
  })

  return (
    <div>
      <button onClick={theme.toggle}>
        {theme.value ? <MdBrightness5 /> : <MdBrightness2 />}
      </button>
    </div>
  )
}

export default ThemeToggle
