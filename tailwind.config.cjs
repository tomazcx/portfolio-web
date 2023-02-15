/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif'
			},
			colors: {
				blue: {
					400: '#315EFF',
					500: '#1246FF',
					600: '#2E4AAB'
				},
				background: '#1A1A1A',
				white: '#F0F0F0'
			},
			keyframes: {
				show: {
					'0%': {transform: 'translateX(100%)'},
					'100%': {transform: 'translateX(0%)'}
				},

			},
			animation: {
				'sidebar': 'show .3s ease'
			}
		},
	},
	plugins: [],
}
