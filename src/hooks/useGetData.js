import { ref, onMounted } from 'vue';

export function useGetData(fetchUrl) {
    const url = fetchUrl;
    const data = ref([]);
    const isLoader = ref("false");
    const error = ref("null"); // Для хранения сообщений об ошибках, если это необходимо
    let dataValue = ref([]);

    const getData = async () => {
        isLoader.value = true;
        error.value = null; // Сбрасываем ошибку перед запросом
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP! статус: ${response.status}`);
            }
            // data.value = await response.json();
            dataValue.value = await response.json();
        } catch (err) {
            console.error('Не удалось получить данные:', err);
            error.value = err.message; // Сохраняем сообщение об ошибке
        } finally {
            isLoader.value = false; // Обеспечиваем отключение загрузчика
        }
    };
    
    onMounted(getData);

    console.log(dataValue.value, 'ret');


    return { data, isLoader, error, dataValue };
}

export default useGetData