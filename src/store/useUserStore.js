import useGetData from "@/hooks/useGetData";
import { defineStore } from "pinia";
import { ref } from 'vue'

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const useUserStore = defineStore('userStore', () => {
    const users = ref([]);
    const isUserLoaded = ref("null");
    const errorUser = ref("null");

    if(users.value.length === 0) {
        const {data, isLoader, error} = useGetData(BASE_URL);
        users.value = data;
        isUserLoaded.value = isLoader;
        errorUser.value = error;
    }

    return { users, isUserLoaded, errorUser }
})

export default useUserStore;