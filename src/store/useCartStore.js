import useGetData from "@/hooks/useGetData";
import { defineStore } from "pinia";
import { ref } from 'vue'

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const useCartsStore = defineStore('cartsStore', () => {
    const cards = ref([]);
    const error = ref(null); 
    const isLoader = ref(false);

    if(cards.value.length === 0) {
        const data = useGetData();
        data.getData(BASE_URL)
        cards.value = data.data;
        console.log(cards.value);
        error.value = data.error
        isLoader.value = data.isLoader
    }

    return { cards, error, isLoader }
})

export default useCartsStore;