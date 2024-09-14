<template>
    <ul class="catalog-list" v-if="isLoaded">
        <li class="catalog-item" v-for="item in cards " :key="item.id">
            <catalog-item :item="item" />
        </li>
    </ul>
    
</template>
<script setup>
import CatalogItem from '@/components/section/Catalog/CatalogItem.vue';
import useCartsStore from '@/store/useCartStore';

const { cards, isLoaded, error } = useCartsStore()

</script>
<style>
    .load {
        width: 100px;
        height: 100px;
        background: red;
    }

    .catalog-list {
        display: flex;
        flex-wrap: wrap;
        max-width: 700px;
        margin: 0;
        padding: 0;
        list-style: none;
        gap: 30px;
    }

    .catalog-item {
        background-color: teal;
        border-radius: 20px;
        padding: 30px;
        max-width: 335px;
        min-width: 335px;
    }

    .catalog-link {
        text-decoration: none;
        color: black;
    }
    
</style>