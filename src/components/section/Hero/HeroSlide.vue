<template>
    <div :slide="slide">
        <h2>{{ slide.title }}</h2>
        <h3 v-if="slide.subtitle">{{ slide.subtitle }}</h3>
        <ul>
            <li v-for="item in slide.sliderList" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps ({
    slide: {
        type: Object,
        required: false,
        default: () => {}
    }
})
</script>
<style>
    
</style>