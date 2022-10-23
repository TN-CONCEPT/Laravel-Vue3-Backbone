<template>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useHead } from "@vueuse/head"
import { translate } from "../../../services/translateService"
import { getSeoDataFromRoute } from "../../helpers/routeHelpers"
import { useRoute } from "vue-router"

export default defineComponent({
    name: "BaseLayout",
    setup() {
        const $t = translate
        const seoData = getSeoDataFromRoute(useRoute()?.name?.toString() ?? "")

        useHead({
            title: seoData.title,
            meta: [
                {
                    name: "description",
                    content: seoData.description,
                },
            ],
        })

        return { $t }
    },
})
</script>

<style scoped lang="scss"></style>
