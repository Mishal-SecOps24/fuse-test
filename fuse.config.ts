import { defineConfig } from '@fuse/sdk'

export default defineConfig({
  name: 'Fuse Test',
  port: 3000,
  memory: 512,
  cpu: 256,
  security: { dataSensitivity: 'Internal', audience: [] },
})
