# fe-encrypt
## Setup
```
pnpm create vite pnpm-vite-react-typescript --template react-ts   
```
- pnpm
- vite
- react
- typescript
## Module
### RSA
install
```
pnpm add node-rsa @types/node-rsa
```
### Polyfills
install
```
pnpm add vite-plugin-node-stdlib-browser
```

vite.config.ts
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'vite-plugin-node-stdlib-browser' // 추가

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(), // 추가
  ],
})
```
