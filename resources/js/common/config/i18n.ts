import en from "../../lang/en"
import ro from "../../lang/ro"
import hu from "../../lang/hu"
import { I18nOptions } from "vue-i18n"

export enum Locales {
    EN = "en",
    RO = "ro",
    HU = "hu",
}

export const LOCALES = [
    { value: Locales.EN, caption: "English" },
    { value: Locales.HU, caption: "Hungarian" },
    { value: Locales.RO, caption: "Romanian" },
]

export const defaultLocale = Locales.EN

const translations = {
    [Locales.EN]: en,
    [Locales.HU]: hu,
    [Locales.RO]: ro,
}

export const i18nOptions: I18nOptions = {
    globalInjection: true,
    legacy: false,
    messages: translations,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
}
