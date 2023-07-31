// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography()
  ],
  rules: [
    [
      // 透明盒子 圆角 阴影
      "tm",
      {
        "background-color": "rgba(255, 255, 255, 0)",
        "border-radius": "0.25rem",
        "box-shadow": "0 0 10px rgba(0, 0, 0, 0.5) "
      }
    ],
    [
      // 上边和右边的margin
      "mtl",
      {
        "margin-top": "0.5rem",
        "margin-right": "0.5rem"
      }
    ]
  ]
})