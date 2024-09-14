<template>
    <div>cards</div>
</template>
<script setup>
import useCartsStore from '@/store/useCartStore';
import { useRoute } from 'vue-router'

const { cards } = useCartsStore();
console.log(cards.target);

const route = useRoute();

const card = cards.value.find(el => el.id === route.params.id)
console.log(card);

// const card = route.params.id

</script>
<style>
    
</style>