<template>
    <div class="toast-container tw-flex tw-flex-col tw-flex-wrap">
        <span class="title tw-text-md tw-font-semibold">{{ title }}</span>
        <span v-if="subtitle !== undefined" class="tw-text-xs">{{ subtitle }}</span>
    </div>
</template>

<script>
export default {
    name: "GeneralToast",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false,
            default: undefined
        }
    }
}
</script>
