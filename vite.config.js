import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';	

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001,
	},
	resolve: {
		alias: {
			src: "/src",
			icons:"/src/assets/icons",
			imgs:"/src/assets/imgs",
			themes:"/src/assets/theme",
			components:'/src/components',
			context:'/src/context',
			pages:'/src/pages',
		},
	},
});
