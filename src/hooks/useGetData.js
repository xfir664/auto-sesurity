import { ref } from 'vue';

export function useGetData() {
    let isLoader = ref(false); 
    let error = ref(null); 
    let data = ref([]);

    const getData = async (fetchUrl) => {
        isLoader.value = true;
        error.value = null; // Сбрасываем ошибку перед запросом
        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP! статус: ${response.status}`);
            }
            data.value = await response.json();
        } catch (err) {
            console.error('Не удалось получить данные:', err);
            error.value = err.message; // Сохраняем сообщение об ошибке
        } finally {
            isLoader.value = false; // Обеспечиваем отключение загрузчика
        }
    };

    return { isLoader, error, data, getData};
}

export default useGetData