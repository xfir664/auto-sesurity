import { defineStore } from "pinia";
import { ref } from 'vue'

const useCorzinaStore = defineStore('corzinaStore', () => {
    const corzinaStore = ref([]);

    const addItemInCorzina = (item) => {
        const current = corzinaStore.value.find(el => el.id == item.id);
        
        if(current) {
            corzinaStore.value.forEach(el => {
                if(el.id == current.id) {
                    el.count = el.count + 1;
                }
            })
        } else {
            corzinaStore.value.push(item);
        }
    }

    const increasCount = (coutn) => {
        console.log(coutn);
        return coutn.count++
    }

    const deCreasCount = (coutn) => {
        if(coutn.count !== 1) {
            console.log(coutn);
            console.log(coutn.id);
            return coutn.count--
        } else {
            coutn.count--
            corzinaStore.value.forEach((item, index) => {
                if(item.id === coutn.id){
                    corzinaStore.value.splice(index, 1);
                }
            })
            console.log(corzinaStore.value);
        }
    }

    const removFromCorzina = (itemCard) => {
        corzinaStore.value.forEach((item, index) => {
            if(item.id === itemCard.id) {
                itemCard.count = 0;
                corzinaStore.value.splice(index, 1);
            }
        })
    }

    return { corzinaStore, addItemInCorzina, increasCount, deCreasCount, removFromCorzina }
})

export default useCorzinaStore;