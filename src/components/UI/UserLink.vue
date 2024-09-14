<template>
    <router-link class="link" :path="path" :to="path">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        path: {
            type: String,
            required: false,
            default: () => '#',
        }
    },
    name: "user-link"
}
</script>
<style scoped>

    .link {
        text-decoration: none;
        color: inherit;
    }
    
</style>