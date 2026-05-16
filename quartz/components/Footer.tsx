import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
                  
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <p class="visitor-counter"><span id="visitor-count"></span></p>
      </footer>
    )
  }

  Footer.css = style + `
.visitor-counter {
  text-align: center;
  color: var(--darkgray);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
.visitor-counter::before {
  content: "👁️ Visits: ";
}
`

  return Footer
}) satisfies QuartzComponentConstructor
