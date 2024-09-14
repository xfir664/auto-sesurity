import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useSlider (dataArr, interval) {
    const slidersData = dataArr;
    const intervalId = ref('null');
    const currentSlide = ref('0');


    const nextSlide = () => {
        // Переход к следующему слайду
        currentSlide.value = (currentSlide.value + 1) % slidersData.length;
    };

    const startAutoSlide = () => {
        // Запускаем автоматическую прокрутку
        intervalId.value = setInterval(nextSlide, interval); // Меняем слайд каждые 3 секунды
    };

    const stopAutoSlide = () => {
        // Останавливаем автоматическую прокрутку
        clearInterval(intervalId.value);
    };

    onMounted(startAutoSlide);
    onBeforeUnmount(stopAutoSlide);

    return { slidersData, currentSlide }
}
