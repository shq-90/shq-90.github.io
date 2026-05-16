import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const TestNav: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="test-nav">
      <p>TEST NAVIGATION WORKS</p>
    </div>
  )
}

TestNav.css = `.test-nav { padding: 1rem; background: yellow; }`

export default (() => TestNav) satisfies QuartzComponentConstructor
