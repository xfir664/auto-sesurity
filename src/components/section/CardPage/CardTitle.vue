<template>
    <div class="card">
        <div>cards</div>
        <h2>{{ card.title }}</h2>
        <p>description: {{ card.title }} {{ card.title }} {{ card.title }} {{ card.title }}</p>
        <user-btn @click="addToCorzina">В корзину</user-btn>
    </div>
</template>
<script>
import useCorzinaStore from '@/store/useCorzinaStore.js'

export default {
    props: {
        card: {
            type: Object,
            required: false,
            default: () => {}
        }
    },
    methods: {
        addToCorzina() {
            const { addItemInCorzina } = useCorzinaStore();
            addItemInCorzina(this.card);
        }
    }
}
</script>
<style>
    .card {
        padding: 10px;
        border: 3px solid teal;
    }
</style>