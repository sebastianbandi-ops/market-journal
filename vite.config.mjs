import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: ['index.html', 'demand-forecast.html', 'solar-delivery.html', 'auction-activity.html', 'pjm-explorer.html', 'solar-credit-clock.html', 'oil-surplus.html', 'ai-deal-capture.html'],
    },
  },
});
