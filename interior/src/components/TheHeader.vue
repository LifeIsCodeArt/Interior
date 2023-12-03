<script setup>
  import {useMenuItemsStore} from '../stores/menuItems.js'

  import {computed} from "vue";
  import TheNavigation from '../components/TheNavigation.vue'

  const store = useMenuItemsStore()
  const items = computed(()=> store.MenuItems)
</script>

<template>
    <div class="bg-[#D3CBC5] container px-[10.5rem] flex items-center justify-between">
        <div class="flex justify-center items-center">
            <img src="../assets/icons/Group.svg" alt="" class="mr-[0.5rem] w-[1.95rem] h-[2.185rem]">
            <p class="text-[1rem] leading-[3.75rem] tracking-[0.035rem] font-oswald">interior</p>
        </div>
        <nav class="">
            <ul class="flex w-[32rem] justify-between">
                <TheNavigation v-for="item in items" :key="item.id" :nav="item"></TheNavigation>
            </ul>
        </nav>
        <div class="flex">
            <img src="../assets/icons/Vector.svg" alt="" class="mr-[1.7rem] w-[1.125rem] h-[1.19rem]">
            <img src="../assets/icons/Group(1).svg" alt="" class="w-[1.2rem] h-[1.13rem]">
        </div>
    </div>

</template>

<style scoped>
.container{
  width: 90rem;
  margin: 0 auto;
  max-height: 5rem;
}
</style>