import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useMenuItemsStore = defineStore('MenuItemsStore', () => {
  const MenuItems = ref([
    {
      id:1,
      name: 'Home'
    },
    {
      id:2,
      name: 'Pages'
    },
    {
      id:3,
      name: 'Services'
    },
    {
      id:4,
      name: 'Projects'
    },
    {
      id:5,
      name: 'Blog'
    },
    {
      id:6,
      name: 'Contact Us'
    },
  ])


  return {MenuItems}
})
