<template>
        <user-link :path="`/catalog-systems/${item.id}`">
            <img :src=item.url :alt="item.title" style="width: 150px; height: 150px; background: red;">
            <h3>{{item.title}}</h3>
        </user-link>
</template>
<script setup>
    const props = defineProps({
        item: {
            type: Object,
            required: true,
            default: () => {}
        },
        path: {
            type: String,
            required: false,
            default: () => '#'
        }
    })
</script>

<!-- <script>
    export default {
        props: {
            item: {
                type: Object,
                required: true,
                default: () => {}
            },
            path: {
                type: String,
                required: false,
                default: () => '#'
            }
        }
    }
</script> -->
<style>
    
</style>