<script setup>
  import {useCarouselItemsStore} from '../stores/carouselItems.js'
  import {useCollectionItemsStore} from '../stores/collectionStore.js'

  import TheCarousel from '../components/TheCarousel.vue'
  import TheButton from '../components/TheButton.vue'
  import CollectionItems from '../components/collectionItems.vue'

  import {computed, ref} from "vue";

  const carouselStore = useCarouselItemsStore()
  const carouselItems = computed(()=> carouselStore.CarouselItems)
  const collectionStore = useCollectionItemsStore().chairCollectionItems

  const activeSection = ref(1)

  const collectionItems = computed(()=> useCollectionItemsStore().chairCollectionItems)
</script>

<template>
    <div class="margin">
        <div class="container bg-interiorImage bg-no-repeat bg-auto">
            <div class="w-[25.19rem] h-[19.3rem] pt-[10rem] ml-[10rem] relative pl-[2.6rem] pt-[3.1rem]">
                <div class="uppercase text-[#2C314B] text-[1rem] leading-[3.75rem] font-nunito font-thin">
                   INTERIOR
                </div>
                <div class=" mb-[1rem] text-[#1B1A1A] text-[3.125rem] leading-[3.75rem] font-nunito font-normal">
                   Home Deasigns
                   Made Easy
                </div>
                <div>
                    <p class="">$416.00 <span class="">Starting</span></p>

               </div>
                <TheButton :text="'Show Now'" :button-bg="true"></TheButton>
            </div>
        </div>

        <section class="containerItems pt-[6rem] border">

          <div class="flex justify-between w-full px-[10.3rem]">
              <TheCarousel v-for="item in carouselItems" :item="item" :key="item.id"></TheCarousel>
          </div>

          <div class="mt-[7.1rem] px-[10.3rem]">
              <div class="flex items-center">
                <img src="../assets/icons/Line%2017.svg" alt="#" class="">
                  <p class="text-[1rem] text-[#9A6437] font-nunito leading-[3.75rem] ml-[0.6rem]">PROFESSIONAL TEAM</p>
              </div>

              <div class="flex justify-between items-center mt-[1.3rem] mb-[2.12rem]">
                  <p class="font-nunito font-normal text-[2.6rem] leading-[3.75rem]">The Best New Arrivals</p>

                  <ul class="flex justify-between w-[23.5rem]  items-center">

                      <li :class="{'disabled:cursor-not-allowed  pointer-events-none bg-[#EEEEEE] font-semibold  pointer-events:none':activeSection === 1,
                                   'bg-white font-normal':activeSection !== 1}"
                          class="w-auto font-nunito font-normal leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                          <button class="h-[2rem] flex justify-center items-center" @click="activeSection = 1">Desk</button>
                      </li>

                    <li :class="{'disabled:cursor-not-allowed  pointer-events-none bg-[#EEEEEE] font-semibold  pointer-events:none':activeSection === 1,
                                   'bg-white font-normal':activeSection !== 2}"
                        class="w-auto font-nunito font-normal leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                      <button class="h-[2rem] flex justify-center items-center" @click="activeSection = 2">Desk</button>
                    </li>

                      <li :class="{'disabled:cursor-not-allowed  pointer-events-none bg-[#EEEEEE] font-semibold  pointer-events:none':activeSection === 3,
                                   'bg-white font-normal':activeSection !== 3}"
                          class="w-auto font-nunito font-normal leading-[3.75rem] text-[1rem] items-center">
                          <button class="h-[2rem] items-center" @click="activeSection = 3">Lighting</button>
                      </li>

                      <li :class="{'disabled:cursor-not-allowed  pointer-events-none bg-[#EEEEEE] font-semibold  pointer-events:none':activeSection === 4,
                                   'bg-white font-normal':activeSection !== 4}"
                          class="w-auto font-nunito font-normal leading-[3.75rem] text-[1rem]">
                          <button class="" @click="activeSection = 4">Accessories</button>
                      </li>
                  </ul>
              </div>

              <div class="grid grid-cols-4">
                  <CollectionItems v-for="common in collectionItems" :key="common.id" :item="common"></CollectionItems>
              </div>
          </div>

        </section>
    </div>
</template>

<style scoped>
.container{

  height: 46.5rem;
}
.containerItems{
  width: 90rem;
  height: 100rem;
}
.margin{
  width: 90rem;
  margin: 0 auto;
}
</style>