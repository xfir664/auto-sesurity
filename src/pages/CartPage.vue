<template>
    <div>cards</div>
    <h2>{{ currentCards.title }}</h2>
</template>
<script setup>
import useCartsStore from '@/store/useCartStore';
import { useRoute } from 'vue-router'

const { cards, error, isLoader } = useCartsStore();

const route = useRoute()

const currentCards = cards.value.find(el => el.id === Number(route.params.id));

</script>
<style>
    
</style>