import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Hero: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <div class="gs-hero">
      <div class="gs-hero-inner">
        <div class="gs-hero-photo-wrap">
          <img src="/static/photo.jpg" alt="Hengqing Shen" class="gs-hero-photo" onerror="this.style.display='none'" />
        </div>
        <div class="gs-hero-info">
          <h1 class="gs-hero-name">Hengqing Shen</h1>
          <p class="gs-hero-cn">申恒青</p>
          <p class="gs-hero-title">Research Fellow</p>
          <p class="gs-hero-affil">Department of Civil and Environmental Engineering</p>
          <p class="gs-hero-affil">The Hong Kong Polytechnic University</p>
          <div class="gs-hero-contact">
            <span class="gs-hero-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:hengqing.shen@polyu.edu.hk">hengqing.shen@polyu.edu.hk</a>
            </span>
            <span class="gs-hero-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>(+852) 53345265</span>
            </span>
          </div>
          <div class="gs-hero-links">
            <a href="https://scholar.google.com.hk/citations?user=2xsnOWEAAAAJ&hl=zh-CN" class="gs-hero-btn" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
              Google Scholar
            </a>
            <a href="https://github.com/shq-90" class="gs-hero-btn" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.researchgate.net/profile/Hengqing-Shen-2" class="gs-hero-btn" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-1.46 0-2.83.588-3.825 1.646L12 5.672l-3.761-4.026A5.39 5.39 0 0 0 4.414 0 5.39 5.39 0 0 0 0 5.39v13.22A5.39 5.39 0 0 0 5.39 24h9.22a5.39 5.39 0 0 0 5.39-5.39V5.39A5.39 5.39 0 0 0 19.586 0z"/></svg>
              ResearchGate
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.css = `
.gs-hero {
  background: #f8f9fa;
  border-bottom: 1px solid #e8e8e8;
  padding: 2.5rem 2rem;
}

.gs-hero-inner {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
}

.gs-hero-photo-wrap {
  flex-shrink: 0;
}

.gs-hero-photo {
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.gs-hero-info {
  flex: 1;
}

.gs-hero-name {
  font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #202124;
  margin: 0 0 0.15rem 0;
  line-height: 1.3;
}

.gs-hero-cn {
  font-size: 1rem;
  color: #5f6368;
  margin: 0 0 0.8rem 0;
  font-weight: 300;
}

.gs-hero-title {
  font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
  font-size: 1.05rem;
  color: #202124;
  margin: 0 0 0.2rem 0;
  font-weight: 500;
}

.gs-hero-affil {
  font-size: 0.92rem;
  color: #5f6368;
  margin: 0 0 0.1rem 0;
  line-height: 1.5;
}

.gs-hero-contact {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.gs-hero-email,
.gs-hero-phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: #5f6368;
}

.gs-hero-email a {
  color: #1a73e8 !important;
  text-decoration: none !important;
}

.gs-hero-email a:hover {
  text-decoration: underline !important;
}

.gs-hero-links {
  margin-top: 1.2rem;
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.gs-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-family: "Google Sans", "Noto Sans SC", system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  color: #1a73e8 !important;
  text-decoration: none !important;
  background: #ffffff;
  transition: background 0.2s, box-shadow 0.2s;
}

.gs-hero-btn:hover {
  background: #f1f3f4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.gs-hero-btn svg {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .gs-hero-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .gs-hero-contact {
    align-items: center;
  }

  .gs-hero-links {
    justify-content: center;
  }

  .gs-hero-name {
    font-size: 1.6rem;
  }

  .gs-hero-photo {
    width: 140px;
    height: 170px;
  }
}
`

export default (() => Hero) satisfies QuartzComponentConstructor
