// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt/', // Replace with your repository name
    buildAssetsDir: 'assets',
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt 3 PWA',
      short_name: 'NuxtPWA',
      theme_color: '#ffffff',
      description: 'Nuxt 3 PWA Application',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/nuxt/?standalone=true',
      scope: '/nuxt/',
      orientation: 'portrait',
      categories: ['productivity'],
      prefer_related_applications: false,
      icons: [
        {
          src: '/nuxt/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/nuxt/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/nuxt/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module'
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600
    }
  },
  app: {
    baseURL: '/nuxt/', // Replace with your repository name
    buildAssetsDir: 'assets',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      meta: [
        { name: 'title', content: 'Nuxt 3 PWA' },
        { name: 'description', content: 'Nuxt 3 PWA Application' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'NuxtPWA' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/nuxt/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/nuxt/safari-pinned-tab.svg', color: '#ffffff' }
      ]
    }
  }
})