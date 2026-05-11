export default defineEventHandler(async (event) => {
    console.log('****')
    // @ts-ignore
    const slug = event.context.params.slug
    const config = useRuntimeConfig()

    try {
        console.log(config.apiBase)
        const response = await $fetch(`/v1/public/page/${slug}`, {
            baseURL: config.apiBase,
            headers: {
                'Accept': 'application/json'
            }
        })
        return response
    } catch (error) {
        console.error('Ошибка при запросе к API:', error)
        // Возвращаем кастомный объект ошибки, который сможет обработать useFetch
        throw createError({
            statusCode: 502,
            statusMessage: 'Внешний сервис временно недоступен',
            data: { slug }
        })
    }
})