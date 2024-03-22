import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import minifyCSS from '@csstools/postcss-minify'
import scrollViewAnimationsPlugin from '../src/index.js'

const TAILWIND_BASE = '@tailwind utilities;'

export const generatePluginCSS = (options = {}) => {
  const { inline = '', content = '' } = options

  return postcss([
    minifyCSS(),
    tailwindcss({
      plugins: [scrollViewAnimationsPlugin],
      content: [{ raw: content }]
    })
  ])
    .process(
      `${TAILWIND_BASE}${inline}`,
      {
        from: undefined
      })
    .then(res => res.css)
}

console.log(await generatePluginCSS({ content: '<h1 className="animate-pulse animation-range-sm animation-timeline-scroll animation-scroller-[#scrollable]">Hello</h1>' }))
