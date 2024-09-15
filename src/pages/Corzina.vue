<template>
    <div>
        <h2>Corzina baba zina</h2>
        <div v-if="corzinaStore.length !== 0">
            In corzina stoka: {{ corzinaStore.length }} itemov
        </div>
        <div class="corzina-container">
            <div class="corzina-item" v-for="item in corzinaStore" :key="item.id">
                <h2>{{ item.id }}</h2>
                <h2>{{ item.title }}</h2>
                <img :src="item.url" alt="" width="100" height="100">
                <user-btn @click="removFromCorzina(item)">Ydalit' iz zalupi</user-btn>
                <div>
                    <div v-if="item.count">
                        <h2>V corzine stoka zalupi: </h2>
                        <user-btn @click="deCreasCount(item)">-</user-btn>
                        <p>{{ item.count }}</p>
                        <user-btn @click="increasCount(item)">+</user-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import useCorzinaStore from '@/store/useCorzinaStore.js'

const { corzinaStore, increasCount, deCreasCount, removFromCorzina } = useCorzinaStore()

</script>
<style>

.corzina-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.corzina-item {
    padding: 10px;
    border: 3px solid teal;
}
    
</style>