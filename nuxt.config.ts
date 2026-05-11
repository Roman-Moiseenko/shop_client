
export default defineNuxtConfig({
    serverDir: './server',
    devServer: {
        host: '0.0.0.0'
    },
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
    ],

    runtimeConfig: {
        // Доступно ТОЛЬКО на сервере
        apiBase: 'http://web_dto',// 'http://host.docker.internal:8800', // import.meta.env.API_URL,

        // Доступно и на сервере, и на клиенте
        public: {
            authGuard: import.meta.env.AUTH_GUARD,
            apiBase: 'http://127.0.0.1:8800',   // если нужно на клиенте – задай тут, но обычно проксируем
            storageBase: import.meta.env.API_URL + '/storage/',
        }
    }
})