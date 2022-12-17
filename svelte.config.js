import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs",
            fallback: '200.html'
        }),
		paths: {
            
            base: dev ? "" : "/techsauna",
        },
	},
	preprocess: vitePreprocess()
};

export default config;
