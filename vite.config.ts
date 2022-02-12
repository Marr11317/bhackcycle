
import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

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
		}),
		Unocss({
			presets: [
				presetUno(),
			]
		})
	],
	server: {
		host: 'localhost',
		port: 5000
	}
});

export default config;
