
import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';
const config = <UserConfig>defineConfig({
	plugins: [
		svelte({
			emitCss: production,
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: !production,
			},

			// @ts-ignore This is temporary until the type definitions are fixed!
			hot: !production
		})
	],
	server: {
		host: 'localhost',
		port: 4000
	}
});

export default config;
