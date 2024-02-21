import { defineConfig } from 'cypress'
import viteConfig from './vite.config'
import { mergeConfig } from 'vite'
import { CypressEsm } from '@cypress/vite-plugin-cypress-esm'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: () => {
        return mergeConfig(viteConfig, {
          plugins: [
            CypressEsm({
              ignoreImportList: [
                '*vue*',
                'date-fns',
                'pinia',
                'vue',
                'vue-router',
                '@rushstack/eslint-patch',
                '@tsconfig/node20',
                '@types/jsdom',
                '@types/node',
                '@vitejs/plugin-vue',
                '@vue/eslint-config-prettier',
                '@vue/eslint-config-typescript',
                '@cypress/vite-plugin-cypress-esm',
                '@vue/test-utils',
                '@vue/tsconfig',
                'cypress',
                'eslint',
                'eslint-plugin-cypress',
                'eslint-plugin-vue',
                'jsdom',
                'npm-run-all2',
                'prettier',
                'start-server-and-test',
                'typescript',
                'vite',
                'vitest',
                'vue-tsc'
              ],
              ignoreModuleList: [
                '*vue*',
                'date-fns',
                'pinia',
                'vue',
                'vue-router',
                '@rushstack/eslint-patch',
                '@tsconfig/node20',
                '@types/jsdom',
                '@types/node',
                '@vitejs/plugin-vue',
                '@vue/eslint-config-prettier',
                '@vue/eslint-config-typescript',
                '@cypress/vite-plugin-cypress-esm',
                '@vue/test-utils',
                '@vue/tsconfig',
                'cypress',
                'eslint',
                'eslint-plugin-cypress',
                'eslint-plugin-vue',
                'jsdom',
                'npm-run-all2',
                'prettier',
                'start-server-and-test',
                'typescript',
                'vite',
                'vitest',
                'vue-tsc'
              ]
            })
          ]
        })
      }
    }
  }
})
