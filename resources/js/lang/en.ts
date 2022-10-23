import { Pages } from "../common/constants"

export default {
    seo: {
        default: {
            title: "Default title",
            description: "Default description",
        },
        [Pages.HOME]: {
            title: "Homepage",
            description: "Homepage description",
        },
        [Pages.NOT_FOUND]: {
            title: "Not found",
            description: "Notfound description",
        },
    },
    pages: {
        "home-page": {},
    },
}
