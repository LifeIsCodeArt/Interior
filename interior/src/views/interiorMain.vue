<script setup>
  import {useCarouselItemsStore} from '../stores/carouselItems.js'
  import {useCollectionItemsStore} from '../stores/collectionStore.js'
  import {useClientBiosStore} from "../stores/clientsStore.js";

  import TheCarousel from '../components/TheCarousel.vue'
  import TheButton from '../components/TheButton.vue'
  import CollectionItems from '../components/collectionItems.vue'
  import TheClients from '../components/TheClients.vue'
  import TheArticleCarousel from '../components/TheCarouselOfArticles.vue'

  import {computed, onMounted, ref} from "vue";

  const carouselStore = useCarouselItemsStore()
  const carouselItems = computed(()=> carouselStore.CarouselItems)
  const carouselArticles = computed(()=> carouselStore.CarouselArticlesItems)

  const clientsStore = useClientBiosStore()
  const ClientBios = computed(()=> clientsStore.ClientBios)

  const activeSection = ref(1)

  const collectionItems = computed(()=> useCollectionItemsStore().chairCollectionItems)

  const result = useCollectionItemsStore().chairCollectionItems.filter((item) => item.id < 5);

  onMounted(()=>{
    console.log(result)
  })
</script>

<template>
    <div class="margin h-full">
        <section class="container bg-interiorImage bg-no-repeat bg-auto">
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
        </section>

        <section class="containerItems pt-[6rem]">

          <div class="flex justify-between w-full px-[10.3rem]">
              <TheCarousel v-for="item in carouselItems" :item="item" :key="item.id"></TheCarousel>
          </div>

          <section class="mt-[7.1rem] px-[10.3rem]">
              <div class="flex items-center">
                <img src="../assets/icons/Line%2017.svg" alt="#" class="">
                  <p class="text-[1rem] text-[#9A6437] font-nunito leading-[3.75rem] ml-[0.6rem]">PROFESSIONAL TEAM</p>
              </div>

              <div class="flex justify-between items-center mt-[1.3rem] mb-[2.12rem]">
                  <p class="font-nunito font-normal text-[2.6rem] leading-[3.75rem]">The Best New Arrivals</p>

                  <ul class="flex justify-between w-[23.5rem]  items-center">

                      <li :class="{'disabled:cursor-not-allowed text-white pointer-events-none bg-black font-semibold  pointer-events:none':activeSection === 1,
                                   'bg-inherit font-normal':activeSection !== 1}"
                          class="w-auto px-[1.2rem] py-[0.2rem] leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                          <button class="h-[2rem] flex justify-center items-center font-nunito font-normal" @click="activeSection = 1">Desk</button>
                      </li>

                      <li :class="{'disabled:cursor-not-allowed text-white pointer-events-none bg-black font-semibold  pointer-events:none':activeSection === 2,
                                   'bg-inherit font-normal':activeSection !== 2}"
                        class="w-auto px-[1.2rem] py-[0.2rem]  leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                      <button class="h-[2rem] flex justify-center items-center font-nunito font-normal" @click="activeSection = 2">Bedroom</button>
                      </li>

                      <li :class="{'disabled:cursor-not-allowed text-white font-normal pointer-events-none bg-black font-semibold  pointer-events:none':activeSection === 3,
                                   'bg-inherit font-normal':activeSection !== 3}"
                            class="w-auto px-[1.2rem] py-[0.2rem] leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                          <button class="h-[2rem] flex font-nunito font-normal justify-center items-center" @click="activeSection = 3">Lighting</button>
                      </li>

                        <li :class="{'disabled:cursor-not-allowed text-white pointer-events-none bg-black font-semibold  pointer-events:none':activeSection === 4,
                                     'bg-inherit font-normal':activeSection !== 4}"
                            class="w-auto px-[1.2rem] py-[0.2rem] leading-[3.75rem] text-[1rem] h-[2rem] flex justify-center items-center">
                          <button class="h-[2rem] flex justify-center items-center font-nunito font-normal" @click="activeSection = 4">Accessories</button>
                        </li>
                  </ul>
              </div>

              <div class="grid grid-cols-4 gap-8">
                  <CollectionItems v-for="common in collectionItems" :key="common.id" :item="common"></CollectionItems>
              </div>
          </section>

          <section>
              <div class="w-full h-[43.75rem] bg-clientsImage flex flex-col items-center pt-[4.5rem] relative">
                <div class="absolute top-0 w-full h-full popUpBackground"></div>
                <div class="flex text-[#E0E0E0] text-[1rem] font-nunito font-normal leading-[3.75rem] z-10">
                    <img src="../assets/icons/Line%2018.svg" alt="" class="">

                    WHAT PEOPLE SAY

                    <img src="../assets/icons/Line%2018.svg" alt="" class="">
                </div>

                <div class="mt-[1.3rem] mb-[1.5rem] flex text-white text-[2.62rem] font-nunito font-normal leading-[3.75rem] z-10">
                    Words Of Our Clients
                </div>

                <div class="grid grid-cols-4 gap-8 pt-[6rem] z-10">
                    <TheClients v-for="client in ClientBios" :key="client.id" :client="client"></TheClients>
                </div>

              </div>
          </section>

          <section>
              <div class="h-[108.5rem] flex flex-col pt-[6.63rem] px-[10.3rem]">

                  <div class="flex items-center">
                      <img src="../assets/icons/Line%2017.svg" alt="#" class="">
                      <p class="text-[1rem] text-[#9A6437] font-nunito leading-[3.75rem] ml-[0.6rem]">POPULAR PRODUCT</p>
                  </div>

                  <div class="flex justify-between items-center mt-[1.3rem] mb-[2.12rem]">
                      <p class="font-nunito font-normal text-[2.6rem] leading-[3.75rem]">Top Special Product</p>

                      <TheButton :text="'See More Product'" :button-bg="false"></TheButton>
                  </div>

                  <div class="grid grid-cols-4 gap-8">
                      <CollectionItems v-for="common in result" :key="common.id" :item="common"></CollectionItems>
                  </div>

                  <div class="mt-[7rem] mb-[6.4rem] h-[10.3rem] bg-black flex items-center justify-between px-[3.2rem] font-nunito">

                      <div class="bg-inherit text-white flex items-center">

                          <div class="">
                              <img src="../assets/icons/Car_icon.svg" alt="" class="w-[2.93rem] h-[2.35rem]">
                          </div>

                          <div class="flex flex-col ml-[0.6rem]">
                              <h3 class="text-[1.25rem] leading-[1.75rem] font-normal">
                                 Free Shipping
                              </h3>
                              <p class="text-[0.94rem] leading-[1.75rem] font-normal">
                                Capped at $319 per order
                              </p>
                          </div>

                      </div>

                      <div class="">
                          <img src="../assets/icons/Line_22.svg" alt="" class="">
                      </div>

                      <div class="bg-inherit text-white flex items-center">

                    <div class="">
                      <img src="../assets/icons/Lock_icon.svg" alt="" class="">
                    </div>

                    <div class="flex flex-col ml-[0.6rem]">
                      <h3 class="text-[1.25rem] leading-[1.75rem] font-normal">
                        Free Shipping
                      </h3>
                      <p class="text-[0.94rem] leading-[1.75rem] font-normal">
                        Capped at $319 per order
                      </p>
                    </div>

                  </div>

                    <div class="">
                      <img src="../assets/icons/Line_22.svg" alt="" class="">
                    </div>

                    <div class="bg-inherit text-white flex items-center">

                          <div class="text-[1.25rem] leading-[1.75rem] font-normal">
                              <img src="../assets/icons/Screen_icon.svg" alt="" class="">
                          </div>

                          <div class="flex flex-col ml-[0.6rem]">
                              <h3 class="text-[1.25rem] leading-[1.75rem] font-normal">
                                Free Shipping
                              </h3>
                            <p class="text-[0.94rem] leading-[1.75rem] font-normal">
                                Capped at $319 per order
                            </p>
                          </div>

                        </div>

                        <div class="">
                            <img src="../assets/icons/Line_22.svg" alt="" class="">
                        </div>

                        <div class="bg-inherit text-white flex items-center">

                          <div class="">
                              <img src="../assets/icons/Mark_icon.svg" alt="" class="">
                          </div>

                          <div class="flex flex-col ml-[0.6rem]">
                              <h3 class="text-[1.25rem] leading-[1.75rem] font-normal">
                                Free Shipping
                              </h3>
                              <p class="text-[0.94rem] leading-[1.75rem] font-normal">
                                Capped at $319 per order
                              </p>
                          </div>

                        </div>

                  </div>
                  <div class="flex flex-col items-center ">
                      <div class="flex text-[#9A6437] w-[20rem] z-10 ">
                          <img src="../assets/icons/Line%2017_brown.svg" alt="" class="">
                          <p class=" text-[1rem] font-nunito font-normal leading-[3.75rem] mx-[0.75rem]">
                            RECENT ARTICLES
                          </p>


                          <img src="../assets/icons/Line%2017_brown.svg" alt="" class="">
                      </div>

                      <div class="mt-[1.3rem] mb-[2.75rem] text-[#1B1A1A] flex text-[2.62rem] font-nunito font-normal leading-[3.75rem] z-10">
                          Read Our Latest Articles
                      </div>

                      <div class="flex justify-between w-full">
                          <TheArticleCarousel v-for="item in carouselArticles" :item="item" :key="item.id"></TheArticleCarousel>
                      </div>
                </div>
              </div>
          </section>

        </section>
    </div>
</template>

<style scoped>
.container{
  height: 46.5rem;
}
.containerItems{
  height: auto;
}
.margin{
  width: 90rem;
  margin: 0 auto;
}
.popUpBackground{
  background: rgba(0, 0, 0, 0.39);
  z-index: 1;
}
</style>