import useGetData from "@/hooks/useGetData";
import { defineStore } from "pinia";
import { ref } from 'vue'

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const useCartsStore = defineStore('cartsStore', () => {
    const cards = ref([]);
    const error = ref(null); 
    const isLoader = ref(false);

    const setData = async () => {
        const data = useGetData();
        await data.getData(BASE_URL);
        cards.value = data.data.value;
        cards.value.forEach(el => {
            el.count = 1;
        })
        error.value = data.error;
        isLoader.value = data.isLoader;
    }

    setData();

    return { cards, error, isLoader }
})

export default useCartsStore;