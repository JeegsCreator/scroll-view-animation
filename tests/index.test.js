import { it, describe, expect } from 'vitest'
import { generatePluginCSS } from './utils'

describe('scroll-view-animation plugin', () => {
  it('basic use', async () => {
    const css = await generatePluginCSS({
      content: '<h1 className="animate-pulse">Hello</h1>'
    })

    expect(css.length).greaterThan(0)
    expect(css).toMatch('@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}')
  })

  it('use animation range', async () => {
    const css = await generatePluginCSS({
      content: '<h1 className="animate-pulse animation-range-sm">Hello</h1>'
    })

    expect(css.length).greaterThan(0)
    expect(css).toMatch('@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}')
  })
})
