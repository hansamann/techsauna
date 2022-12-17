import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs",
        }),
		paths: {
            
            base: "/techsauna",
        },
	},
	preprocess: vitePreprocess()
};

export default config;
