// uno.config.ts
import {
	defineConfig,
	presetUno,
	presetAttributify,
	presetIcons,
	presetTypography
} from 'unocss'

export default defineConfig({
	// ...UnoCSS options
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'text-bottom',
				// ...
			},
		}),
		presetTypography()
	],
	rules: [
		[
			// 透明盒子 圆角 阴影
			'tm',
			{
				"padding": "0.5rem",
				'background-color': 'rgba(255, 255, 255, 0)',
				'border-radius': '0.25rem',
				'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5) '
			}
		],
		[
			// 上边和右边的margin
			'mtl',
			{
				'margin-top': '0.5rem',
				'margin-right': '0.5rem'
			}
		],
		[
			'tag',
			{
				height: '1.5rem',
				'line-height': '1.5rem',
				'text-align': 'center',
				'border-radius': '0.25rem',
				'font-size': '0.75rem',
				'margin-top': '0.5rem',
				'margin-bottom': '0.2rem',
				color: '#fff',
				background:
					'linear-gradient(to right, rgba(1,104,138,1) 0%, rgba(75,76,157,1) 77%, rgba(75,76,157,1) 100%)',
				filter:
					"progid:DXImageTransform.Microsoft.gradient( startColorstr='#01688a', endColorstr='#4b4c9d', GradientType=1 )"
			}
		],
		// 半透明黑色
		[
			'bg-black-50',
			{
				'background-color': 'rgba(0, 0, 0, 0.5)'
			}
		]
	]
})
