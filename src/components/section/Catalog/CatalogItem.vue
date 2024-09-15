<template>
        <user-link :path="`/catalog-systems/${item.id}`">
            <img :src=item.url :alt="item.title" style="width: 150px; height: 150px; background: red;">
            <h3>{{item.title}}</h3>
            <user-btn @click="addToCorzina(navigate)" @click.prevent="" >В корзину</user-btn>
        </user-link>
</template>
<script setup>
    import useCorzinaStore from '@/store/useCorzinaStore.js'

    const {addItemInCorzina} = useCorzinaStore()

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

    const addToCorzina = (nav) => {
        addItemInCorzina(props.item)
    }
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