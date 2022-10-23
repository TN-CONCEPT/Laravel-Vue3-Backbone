<template>
    <base-layout :title="undefined">
        <h1>This is a sample page. Modify it to your needs</h1>
    </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseLayout from "../common/components/layouts/BaseLayout.vue"

export default defineComponent({
    name: "HomePage",
    components: { BaseLayout },
})
</script>

<style lang="scss" scoped></style>
