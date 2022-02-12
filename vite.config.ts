/**
 * Change this to `true` to generate source maps alongside your production bundle. This is useful for debugging, but
 * will increase total bundle size and expose your source code.
 */
const sourceMapsInProduction = false;

/*********************************************************************************************************************/
/**********                                              Vite                                               **********/
/*********************************************************************************************************************/

import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';
const config = <UserConfig> defineConfig({
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
	],
	server: {
		host: 'localhost',
		port: 5000
	}
});

export default config;
