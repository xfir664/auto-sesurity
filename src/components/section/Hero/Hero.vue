<template>
    <section class="slider">
        <hero-slider/>
        <button>ПОДРОБНЕЕ</button>
    </section>
</template>

<script setup>
import HeroSlider from './HeroSliders.vue'

</script>

<style>
.button {
    border-radius: 50px;
}

button {
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>