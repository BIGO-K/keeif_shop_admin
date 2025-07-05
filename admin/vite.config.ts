import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	process.env = {
		...process.env,
		...loadEnv(mode, process.cwd(), 'MM_'),
	};

	return {
		plugins: [
			vue(),
			tsconfigPaths(),
		],
		css: {
			devSourcemap: true,
		},
		envPrefix: 'MM_',
		base: process.env.MM_BASE_PATH ?? '/',
		build: {
			outDir: process.env.MM_OUT_DIR ?? 'dist',
		},
	};
});