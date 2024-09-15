<template>
    <card-title :card="currentCard"/>
</template>
<script setup>
import useCartsStore from '@/store/useCartStore';
import { useRoute } from 'vue-router'
import CardTitle from '@/components/section/CardPage/CardTitle.vue';

const { cards } = useCartsStore();

const route = useRoute()

const currentCard = cards.find(el => el.id === Number(route.params.id));

</script>
<style>
    
</style>