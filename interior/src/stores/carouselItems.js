import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useCarouselItemsStore = defineStore('CarouselItemsStore', () => {
    const CarouselItems = ref([
        {
            id:1,
            label: 'New Chair\n' +
                'Collection 2022',
            imageLink: '../src/assets/images/image-asset-removebg-preview.svg'
        },
        {
            id:2,
            label: 'Lamp Desk',
            imageLink: '../src/assets/images/desk-lamp-marble-table.svg'
        },
        {
            id:3,
            label: 'Modern Chair\n' +
                'Collection 2022',
            imageLink: '../src/assets/images/picture-frame-by-velvet-armchair-removebg-preview.svg'
        },
    ])


    return {CarouselItems}
})
