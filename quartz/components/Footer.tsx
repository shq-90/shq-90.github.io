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
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener("nav", function() {
            var el = document.getElementById("visitor-count");
            if (!el) return;
            var count = parseInt(localStorage.getItem("visitor_count") || "0", 10);
            if (!sessionStorage.getItem("visited")) {
              count++;
              localStorage.setItem("visitor_count", count.toString());
              sessionStorage.setItem("visited", "1");
            }
            el.textContent = count;
          });
          // Run on initial load too
          (function() {
            var el = document.getElementById("visitor-count");
            if (!el) return;
            var count = parseInt(localStorage.getItem("visitor_count") || "0", 10);
            if (!sessionStorage.getItem("visited")) {
              count++;
              localStorage.setItem("visitor_count", count.toString());
              sessionStorage.setItem("visited", "1");
            }
            el.textContent = count;
          })();
        ` }} />
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
