import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"

export default function Main(props) {
  const { theme } = useContext(ThemeContext);

  return <main>{theme}</main>
}