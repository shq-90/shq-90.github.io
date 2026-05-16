import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  title?: string
}

export default ((opts?: Options) => {
  const title = opts?.title ?? "页面导航"
  
  const PageNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Always show navigation for non-index pages
    return (
      <div class="page-nav">
        <h4>{title}</h4>
        <ul>
          <li><a href="/cv">CV</a></li>
          <li><a href="/publications">Publications</a></li>
          <li><a href="/members">Members</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/感悟随记">Reflections</a></li>
        </ul>
      </div>
    )
  }

  PageNav.css = `
.page-nav {
  padding: 0.5rem 0;
}
.page-nav h4 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--darkgray);
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--lightgray);
}
.page-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.page-nav li {
  margin: 0;
}
.page-nav a {
  display: block;
  padding: 0.3rem 0.5rem;
  color: var(--darkgray);
  text-decoration: none;
  font-size: 0.85rem;
  border-radius: 4px;
  transition: background 0.15s;
}
.page-nav a:hover {
  background: var(--highlight);
  color: var(--secondary);
}
`

  return PageNav
}) satisfies QuartzComponentConstructor
