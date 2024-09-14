import useGetData from "@/hooks/useGetData";
import { defineStore } from "pinia";
import { ref } from 'vue'

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

const useCartsStore = defineStore('cartsStore', () => {
    let cards = [];
    let isCardLoaded = false;
    let cardError = null;

    if(cards.length === 0) {
        const { data, isLoader, error, dataValue} = useGetData(BASE_URL);
        cards = data.value.value;
        console.log(dataValue, 'datadataValue');
        // console.log(data, 'data');
        // console.log(data.value, 'dta');
        // console.log(cards,'valueee');
        isCardLoaded = isLoader;
        cardError = error;
    }

    return { cards, isCardLoaded, cardError }
})

export default useCartsStore;