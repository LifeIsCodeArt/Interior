import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useClientBiosStore = defineStore('ClientBiosStore', () => {
    const ClientBios = ref([
        {
            id:1,
            name: 'Bessie Cooper',
            job:'Communications Director',
            bio: 'I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi',
            image: '../src/assets/images/Clients%20Collection/client_1.svg'
        },
        {
            id:2,
            name: 'Anjelina Jolie',
            job:'Communications Director',
            bio: 'I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi',
            image: '../src/assets/images/Clients%20Collection/client_2.svg'
        },
        {
            id:3,
            name: 'Brooklyn Simmons',
            job:'Communications Director',
            bio: 'I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi',
            image: '../src/assets/images/Clients%20Collection/client_3.svg'
        },
        {
            id:4,
            name: 'Bessie Cooper',
            job:'Communications Director',
            bio: 'I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi',
            image: '../src/assets/images/Clients%20Collection/client_4.svg'
        },
    ])


    return {ClientBios}
})