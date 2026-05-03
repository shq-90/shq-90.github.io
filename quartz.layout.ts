import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Navbar from "./quartz/components/Navbar"
import Hero from "./quartz/components/Hero"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Navbar,
    Component.ConditionalRender({
      component: Hero,
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Email": "mailto:hengqing.shen@polyu.edu.hk",
      "Google Scholar": "https://scholar.google.com.hk/citations?user=2xsnOWEAAAAJ&hl=zh-CN",
      "GitHub": "https://github.com/shq-90",
      "ResearchGate": "https://www.researchgate.net/profile/Hengqing-Shen-2?ev=hdr_xprf",
    },
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
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Explorer",
      folderClickBehavior: "collapse",
      filterFn: (node) => {
        return node.name !== "papers";
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "Explorer",
      folderClickBehavior: "collapse",
      filterFn: (node) => {
        return node.name !== "papers";
      },
    }),
  ],
  right: [],
}
