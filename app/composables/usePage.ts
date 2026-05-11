export interface WidgetParams {
    [key: string]: any
}

export interface WidgetInstance {
    uuid: string
    widgetSlug: string
    params: WidgetParams
}

export interface PageBlock {
    id: number
    sort: number
    section: string | null
    widgetInstance: WidgetInstance
}
export interface PageSeoMeta {
    title: string
    description: string
    [key: string]: any     // на случай, если API пришлёт что-то ещё
}
export type Page = {
    id: number
    title: string
    slug: string
    content: string | null
    contentType: 'simple' | 'widget_based'
    publishedAt: string
    meta: PageSeoMeta | null
    template: string
    blocks: PageBlock[]
}
export const usePage = (slug: string) => {

    const { data, pending, error } = useFetch<Page>(`/api/v1/public/page/${slug}`, {
        key: `page-${slug}`,
        server: true,
        lazy: false,
    })

    const page = computed(() => {
        // Если запрос успешен, возвращаем полученную страницу
        if (data.value) {
            return data.value
        }
        // Иначе null (пока загружается или произошла ошибка)
        return null
    })

    return { page, pending, error }
}