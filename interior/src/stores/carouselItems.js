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

    const CarouselArticlesItems = ref([
        {
            id:1,
            author:'John Doe',
            currentMonth:new Date(null, 2, 5).toLocaleString("en-US", { month: 'short' }),
            currentDate: new Date(null, 2, 5).getDay(),
            comments: '9',
            label: 'Things to Know When Choosing the Perfect Sofa',
            imageLink: '../src/assets/images/Articles%20Collection/living-room.png',
        },

        {
            id:2,
            author:'John Doe',
            currentMonth:new Date(null, 12, 5).toLocaleString("en-US", { month: 'short' }),
            currentDate: new Date(null, 2, 5).getDay(),
            comments: '9',
            label: 'Things to Know When Choosing\n' +
                'the Perfect Sofa',
            imageLink: '../src/assets/images/Articles%20Collection/empty-living.png',
        },

        {
            id:3,
            author:'John Doe',
            currentMonth:new Date(null, 12, 5).toLocaleString("en-US", { month: 'short' }),
            currentDate: new Date(null, 2, 5).getDay(),
            comments: '9',
            label: 'Things to Know When Choosing\n' +
                'the Perfect Sofa',
            imageLink: '../src/assets/images/Articles%20Collection/green-sofa.png',

        },

    ])

    return {CarouselItems,CarouselArticlesItems}
})
