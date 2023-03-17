import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),

		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'My PWA App',
				short_name: 'My App',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/vite.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/vite.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
