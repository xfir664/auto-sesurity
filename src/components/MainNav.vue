<template>
    <nav class="nav">
        <div class="logo-container">
            <router-link class="link logo-link" to="/">
                <img src="./../assets/img/logo.png" alt="Logo">
            </router-link>
        </div>
        <main-nav-list></main-nav-list>
    </nav>
</template>
<script>

import MainNavList from './MainNavList.vue'


export default {
    components: {
        MainNavList
    }
}
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