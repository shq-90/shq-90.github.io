import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Search from "./Search"

export default (() => {
  const SearchComponent = Search()

  const navLinks = [
    { name: "Home", slug: "" },
    { name: "Research", slug: "research" },
    { name: "Publications", slug: "publications" },
    { name: "Members", slug: "members" },
    { name: "News", slug: "news" },
    { name: "CV", slug: "cv" },
    { name: "Reflections", slug: "感悟随记" },
  ]

  const Navbar: QuartzComponent = (props: QuartzComponentProps) => {
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
            <div class="gs-nav-search-wrapper">
              <SearchComponent {...props} />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  Navbar.afterDOMLoaded = `
    ${SearchComponent.afterDOMLoaded ?? ""}

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

    window.addCleanup(() => {
      const el = document.getElementById("visitor-count");
      if (!el) return;
      let count = parseInt(localStorage.getItem("visitor_count") || "0", 10);
      if (!sessionStorage.getItem("visited")) {
        count++;
        localStorage.setItem("visitor_count", count.toString());
        sessionStorage.setItem("visited", "1");
      }
      el.textContent = count;
    });
  `

  Navbar.css = `
    ${SearchComponent.css ?? ""}

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
      font-weight: 700;
      padding: 0.5rem 0.85rem;
      border-radius: 4px;
      transition: background 0.2s, color 0.2s;
      white-space: nowrap;
    }

    .gs-nav-link:hover {
      background: #f1f3f4;
      color: #1a73e8 !important;
    }

    .gs-nav-search-wrapper {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      padding-left: 0.8rem;
      border-left: 1px solid #e8e8e8;
    }

    .gs-nav-search-wrapper #search-icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      transition: background 0.2s;
      color: #5f6368;
      background: none;
      border: none;
    }

    .gs-nav-search-wrapper #search-icon:hover {
      background: #f1f3f4;
      color: #1a73e8;
    }

    .gs-nav-search-wrapper #search-icon svg {
      width: 18px;
      height: 18px;
    }

    #search-bar {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2000;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      flex-direction: column;
      align-items: center;
      padding-top: 12vh;
    }

    #search-bar.active {
      display: flex;
    }

    #search-bar .search-space {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    #search-bar .search {
      width: min(620px, 85vw);
      display: flex;
      flex-direction: column;
    }

    #search-bar .search input {
      width: 100%;
      padding: 1rem 1.5rem;
      font-size: 1.05rem;
      font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
      border: 1px solid #dadce0;
      border-radius: 12px;
      background: #ffffff;
      color: #202124;
      outline: none;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }

    #search-bar .search input:focus {
      border-color: #1a73e8;
      box-shadow: 0 4px 20px rgba(26, 115, 232, 0.15);
    }

    #search-bar .search .search-results {
      margin-top: 0.5rem;
      width: 100%;
      background: #ffffff;
      border-radius: 12px;
      max-height: 55vh;
      overflow-y: auto;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
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

      .gs-nav-search-wrapper {
        border-left: none;
        border-top: 1px solid #e8e8e8;
        margin-left: 0;
        padding-left: 0;
        padding-top: 0.5rem;
        margin-top: 0.3rem;
        align-self: flex-start;
      }
    }

    body {
      background: #f8f9fa !important;
    }

    .page > .center {
      max-width: 900px !important;
      margin: 0 auto !important;
      padding: 1rem 2rem !important;
    }
  `

  return Navbar
}) satisfies QuartzComponentConstructor
