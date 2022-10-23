type ToastMessage = {
    title: string
    subtitle: string
}

interface IObject {
    [key: string]: any
}

type SeoData = {
    title: string
    description: string
}

export type { ToastMessage, IObject, SeoData }
