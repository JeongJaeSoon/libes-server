import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          libesServer: `${env.VITE_REMOTE_URL}/dist/assets/remoteEntry.js`,
        },
        shared: ['react', 'react-dom'],
      }),
    ],
  };
});
