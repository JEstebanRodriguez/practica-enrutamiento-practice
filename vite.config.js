// @ts-nocheck
import reactPlugin from 'vite-plugin-react'
import path from 'path'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  resolver: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
}

export default config
