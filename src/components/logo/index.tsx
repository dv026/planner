import { useEffect, useState } from "react"

import { Breakpoints } from "../../enums/breakpoints"
import { LogoIcon } from "../icons/logo"
import { styles } from "./styles"

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const [width, setWidth] = useState(getLogoSize(window.innerWidth))

  useEffect(() => {
    function handleResize() {
      setWidth(getLogoSize(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={className}>
      <LogoIcon height={width} />
      <div className={styles.name}>PLANNER</div>
    </div>
  )
}

const getLogoSize = (windowWidth: number): number => {
  const keys = Object.keys(logoSizes)
  for (let i = 0; i < keys.length; i++) {
    const minValue = logoSizes[keys[i]][0]
    const maxValue = logoSizes[keys[i]][1]
    if (windowWidth > minValue && windowWidth <= maxValue) {
      return parseInt(keys[i])
    }
  }
  return 40
}

const logoSizes: Record<string, number[]> = {
  40: [0, Breakpoints.Mobile],
  90: [Breakpoints.Mobile, Breakpoints.Tablet],
  100: [Breakpoints.Tablet, Breakpoints.Laptop],
  120: [Breakpoints.Laptop, Breakpoints.Desktop],
  140: [Breakpoints.Desktop, 5000],
}
