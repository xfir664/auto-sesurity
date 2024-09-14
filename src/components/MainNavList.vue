<template>
    <ul class="nav-list">
        <li class="nav-item" v-for="link in NAV_LINKS" :key="link.id">
            <router-link class="nav-link" :to="link.path" active-class="nav-link-active">{{ link.title }}</router-link>
        </li>
    </ul>
</template>
<script setup>
import { NAV_LINKS } from '@/constants/navLinksData.js'

</script>
<style>
    .nav-link {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
    }

    .nav-link-active {
        color: red;
        text-decoration: solid;
    }

    .btn {
        padding: 10px;
        background-color: teal;
        border: none;
        margin-right: 10px;
    }

    .btn_active {
        background-color: aqua;
    }

    .btn-active {
        background-color: aqua;
    }

</style>