import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Navbar from "./quartz/components/Navbar"
import Hero from "./quartz/components/Hero"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Navbar(),
    Component.ConditionalRender({
      component: Hero,
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Google Scholar": "https://scholar.google.com.hk/citations?user=2xsnOWEAAAAJ&hl=zh-CN",
      "ResearchGate": "https://www.researchgate.net/profile/Hengqing-Shen-2?ev=hdr_xprf",
    },
    copyright: "",
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageNav({ title: "Related Pages" }),
  ],
  right: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
