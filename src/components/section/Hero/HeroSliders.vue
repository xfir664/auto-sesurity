<template>
    <div class="slider-container" :style="{ transform: `translateX(-${sliders.currentSlide.value * 100}%)` }">
        <hero-slide class="slide" :slide="slide" v-for="slide in HERO_DATA" :key="slide.id" />
    </div>
</template>
<script setup>
import HeroSlide from './HeroSlide.vue';
import { useSlider } from '@/hooks/useSlider';
import { HERO_DATA } from '@/constants/heroData.js'

const sliders = useSlider(HERO_DATA, 2000);

</script>
<style>
    .slider {
    position: relative;
    overflow: hidden; /* Скрываем лишние слайды */
    max-width: 1440px;
}

.slider-container {
    display: flex; /* Выстраиваем слайды в ряд */
    transition: transform 0.5s ease; /* Плавный переход между слайдами */
}

.slide {
    min-width: 100%; /* Каждый слайд занимает 100% ширины контейнера */
    box-sizing: border-box; /* Учитываем отступы и границы */
    padding: 20px; /* Отступы внутри слайда */
}
</style>