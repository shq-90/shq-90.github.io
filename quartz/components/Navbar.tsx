import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Navbar: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const navLinks = [
    { name: "Home", slug: "" },
    { name: "Research", slug: "research" },
    { name: "Publications", slug: "publications" },
    { name: "Members", slug: "Members" },
    { name: "News", slug: "news" },
    { name: "CV", slug: "CV" },
    { name: "Reflections", slug: "感悟随记" },
  ]

  return (
    <nav class="gs-navbar">
      <div class="gs-nav-container">
        <a href="/" class="gs-nav-brand">Hengqing Shen</a>
        <button class="gs-nav-hamburger" id="gs-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="gs-nav-links" id="gs-nav-links">
          {navLinks.map(link => (
            <a href={`/${link.slug}`} class="gs-nav-link">{link.name}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

Navbar.afterDOMLoaded = `
  const hamburger = document.getElementById("gs-hamburger");
  const navLinks = document.getElementById("gs-nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll(".gs-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
`

Navbar.css = `
.gs-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  height: 56px;
  display: flex;
  align-items: center;
}

body {
  padding-top: 56px;
}

.gs-nav-container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gs-nav-brand {
  font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #1a73e8 !important;
  text-decoration: none !important;
  white-space: nowrap;
}

.gs-nav-links {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.gs-nav-link {
  color: #3c4043 !important;
  text-decoration: none !important;
  font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 0.85rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}

.gs-nav-link:hover {
  background: #f1f3f4;
  color: #1a73e8 !important;
}

.gs-nav-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  flex-direction: column;
  gap: 4px;
}

.gs-nav-hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: #5f6368;
  transition: all 0.3s;
  border-radius: 1px;
}

.gs-nav-hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.gs-nav-hamburger.active span:nth-child(2) {
  opacity: 0;
}

.gs-nav-hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 900px) {
  .gs-nav-hamburger {
    display: flex;
  }

  .gs-nav-links {
    display: none;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 1px solid #e8e8e8;
    flex-direction: column;
    padding: 0.5rem 2rem 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .gs-nav-links.active {
    display: flex;
  }

  .gs-nav-link {
    padding: 0.6rem 0.85rem;
  }
}

body {
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 50%, #dce3eb 100%) !important;
  background-attachment: fixed !important;
}

.center {
  background: rgba(255, 255, 255, 0.88) !important;
  border-radius: 8px !important;
  padding: 2rem !important;
  margin: 1rem auto !important;
  max-width: 900px !important;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06) !important;
}
`

export default (() => Navbar) satisfies QuartzComponentConstructor
