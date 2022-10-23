import { useI18n } from "vue-i18n"

const translate = (key: string) => {
    if (!key) {
        return ""
    }

    return useI18n().t(key)
}

export { translate }
