<script setup>
  import {useCarouselItemsStore} from '../stores/carouselItems.js'
  import TheCarousel from '../components/TheCarousel.vue'
  import TheButton from '../components/TheButton.vue'
  import {computed} from "vue";

  const carouselStore = useCarouselItemsStore()
  const carouselItems = computed(()=> carouselStore.CarouselItems)
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

          <div class="flex justify-between w-full">
              <TheCarousel v-for="item in carouselItems" :item="item" :key="item.id"></TheCarousel>
          </div>

          <div class="">

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