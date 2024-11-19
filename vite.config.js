import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',  // 允许外部访问，比 true 更明确
    port: 9203
  },
  base: '/FruitCutting/',  // 替换成你的 GitHub 仓库名
})
