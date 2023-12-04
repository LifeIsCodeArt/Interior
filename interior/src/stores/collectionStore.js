import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useCollectionItemsStore = defineStore('CollectionItemsStore', () => {
    const chairCollectionItems = ref([
        {
            id:1,
            label: 'Blue chair',
            imageLink: '../src/assets/images/Items%20Collection/item_1.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:2,
            label: 'Blue chair',
            imageLink: '../src/assets/images/Items%20Collection/item_2.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:3,
            label: 'Coral vase',
            imageLink: '../src/assets/images/Items%20Collection/item_3.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:4,
            label: 'Coffee table set',
            imageLink: '../src/assets/images/Items%20Collection/item_4.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:5,
            label: 'Decorative vase',
            imageLink: '../src/assets/images/Items%20Collection/item_5.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:6,
            label: 'Coral vase',
            imageLink: '../src/assets/images/Items%20Collection/item_6.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:7,
            label: 'Gray sofa',
            imageLink: '../src/assets/images/Items%20Collection/item_7.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:8,
            label: 'Black chair',
            imageLink: '../src/assets/images/Items%20Collection/item_8.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
    ])


    return {chairCollectionItems}
})
