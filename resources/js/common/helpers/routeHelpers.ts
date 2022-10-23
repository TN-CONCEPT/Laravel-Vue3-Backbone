import {translate} from "../../services/translateService"
import {SeoData} from "../types/utils"

export function getSeoDataFromRoute(routeName: string): SeoData {
    const pageTitle = translate(`seo.${routeName}.title`)
    const pageDescription = translate(`seo.${routeName}.description`)

    return {
        title: pageTitle ?? translate(`seo.default.title`),
        description: pageDescription ?? translate(`seo.default.description`),
    }
}
