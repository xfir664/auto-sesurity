<template>
    <nav class="nav">
        <div class="logo-container">
            <router-link class="link logo-link" to="/">
                <img src="./../assets/img/logo.png" alt="Logo">
            </router-link>
        </div>
        <main-nav-list></main-nav-list>
        <router-link to="/carzina">
            <div>корзинa</div>
            <div v-if="corzinaStore.length !== 0">
                {{ corzinaStore.length }}
            </div>
        </router-link>
    </nav>
</template>
<script setup>
import MainNavList from './MainNavList.vue'
import useCorzinaStore from '@/store/useCorzinaStore.js'

const { corzinaStore } = useCorzinaStore();


</script>
<style>
    .nav {
        padding: 40px;
        display: flex;
        gap: 30px;
    }

    .logo-container {
        background: black;
    }
</style>