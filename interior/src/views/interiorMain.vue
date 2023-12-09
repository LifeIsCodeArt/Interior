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
    <div class="totalMargin w-[90rem] h-auto min-xl:m-0 max-2xl:min-w-[64rem]  max-sm:min-w-[34rem] max-xl:w-0 max-xl:m-0  border-2 border-red-400">
        <section class="container bg-interiorImage bg-no-repeat margin lg:w-[60rem] max-2xl:min-w-[60rem] max-2xl:w-0 xl:bg-auto border-2 border-violet-400">
            <div class="w-[25.19rem] h-[19.3rem] pt-[10rem] ml-[10rem] relative pl-[2.6rem] pt-[3.1rem] flex flex-col max-xl:items-center md:justify-center md:items-center md:pr-0 sm:pr-[4.5rem]">
                <div class="uppercase text-[#2C314B] text-[1rem] leading-[3.75rem] font-nunito font-thin max-xl:text-center">
                   INTERIOR
                </div>
                <div class=" mb-[1rem] text-[#1B1A1A] text-[3.125rem] leading-[3.75rem] font-nunito font-normal max-xl:text-center max-xl:text-[2.125rem]">
                   Home Deasigns
                   Made Easy
                </div>
                <div>
                    <p class="">$416.00 <span class="">Starting</span></p>

               </div>
                <TheButton :text="'Show Now'" :button-bg="true"></TheButton>
            </div>
        </section>

        <section class="containerItems pt-[6rem] max-2xl:min-w-[60rem] xl:bg-auto">

          <div class="flex justify-between w-full px-[10.3rem] max-xl:flex-col max-xl:justify-between max-xl:items-center max-xl:px-0 max-2xl:min-w-[60rem] xl:bg-auto">
              <TheCarousel v-for="item in carouselItems" :item="item" :key="item.id"></TheCarousel>
          </div>

          <section class="mt-[7.1rem] px-[10.3rem] totalMargin  max-sm:w-full border-2 border-green-400 max-2xl:min-w-[60rem] max-xl:w-0 ">
              <div class="flex items-center max-xl:justify-center">
                <img src="../assets/icons/Line%2017.svg" alt="#" class="">
                  <p class="text-[1rem] text-[#9A6437] font-nunito leading-[3.75rem] ml-[0.6rem]">PROFESSIONAL TEAM</p>
              </div>

              <div class="flex justify-between items-center mt-[1.3rem] mb-[2.12rem] max-xl:flex-col">
                  <p class="font-nunito font-normal text-[2.6rem] leading-[3.75rem] max-xl:mb-[2rem]">The Best New Arrivals</p>

                  <ul class="flex justify-between w-[23.5rem] items-center">

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

              <div class="grid grid-cols-4 gap-8 max-xl:grid-cols-2">
                  <CollectionItems v-for="common in collectionItems" :key="common.id" :item="common"></CollectionItems>
              </div>
          </section>

          <section>
              <div class="h-[43.75rem] bg-clientsImage flex flex-col items-center pt-[4.5rem] relative margin max-2xl:min-w-[60rem] max-xl:hidden border-2 border-green-400">
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
              <div class="h-[68.5rem] w-full flex flex-col pt-[6.63rem] px-[10.3rem] max-xl:h-[108.5rem] max-xl:px-0 max-2xl:min-w-[60rem] border-2 border-green-400">

                  <div class="flex items-center max-xl:justify-center">
                      <img src="../assets/icons/Line%2017.svg" alt="#" class="">
                      <p class="text-[1rem] text-[#9A6437] font-nunito leading-[3.75rem] ml-[0.6rem]">POPULAR PRODUCT</p>
                  </div>

                  <div class="flex justify-between max-xl:justify-around max-xl:px-[4rem] items-center mt-[1.3rem] mb-[2.12rem]">
                      <p class="font-nunito font-normal text-[2.6rem] leading-[3.75rem]">Top Special Product</p>

                      <TheButton :text="'See More Product'" :button-bg="false"></TheButton>
                  </div>

                  <div class="grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-xl:ml-[10rem]">
                      <CollectionItems v-for="common in result" :key="common.id" :item="common"></CollectionItems>
                  </div>

                  <div class="py-[5.5rem] my-[4.4rem] h-[10.3rem] bg-black  flex items-center justify-between px-[3.2rem] font-nunito
                              max-xl:flex-col  max-xl:h-[25.8rem]  max-xl:w-auto max-xl:px-0 max-xl:justify-center max-sm:justify-between">

                      <!--<div class="bg-black w-[20rem] h-[30rem] flex items-center flex-col justify-center">-->
                        <div class="bg-inherit text-white flex items-center w-auto max-xl:pl-[10%] max-xl:w-full">

                          <div class="">
                              <img src="../assets/icons/Car_icon.svg" alt="" class="w-[2.93rem] h-[2.35rem]">
                          </div>

                          <div class="flex flex-col ml-[0.6rem]">
                              <h3 class="text-[1.25em] leading-[1.75rem] font-normal">
                                 Free Shipping
                              </h3>
                              <p class="text-[0.94em] leading-[1.75em] font-normal">
                                Capped at $319 per order
                              </p>
                          </div>

                      </div>

                      <div class="max-xl:w-full w-[0.4rem] max-xl:pl-[30%]">

                          <img src="../assets/icons/Line_22.svg" alt="" class="">

                      </div>

                      <div class="bg-inherit text-white flex items-center w-auto max-xl:pl-[30%] max-xl:w-full">

                      <div class="">

                          <img src="../assets/icons/Lock_icon.svg" alt="" class="">

                      </div>


                      <div class="flex flex-col ml-[0.6rem]">
                          <h3 class="text-[1.25rem] leading-[1.75em] font-normal">
                              Free Shipping
                          </h3>
                          <p class="text-[0.94rem] leading-[1.75em] font-normal">
                              Capped at $319 per order
                          </p>
                      </div>

                  </div>

                    <div class="max-xl:w-full w-[0.4rem] max-xl:pl-[50%]">

                        <img src="../assets/icons/Line_22.svg" alt="" class="">

                    </div>

                    <div class="bg-inherit text-white flex items-center w-auto max-xl:pl-[50%] max-xl:w-full">

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

                        <div class="max-xl:w-full w-[0.4rem] max-xl:pl-[70%]">

                            <img src="../assets/icons/Line_22.svg" alt="" class="">

                        </div>


                        <div class="bg-inherit text-white flex items-center w-auto max-xl:pl-[70%] max-xl:w-full">

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
                  </div>
                  <div class="flex flex-col items-center max-xl:h-auto max-2xl:min-w-[60rem] max-xl:m-0 border-2  border-green-400">
                      <div class="flex text-[#9A6437] max-xl:h-auto w-[20rem] z-10 ">
                          <img src="../assets/icons/Line%2017_brown.svg" alt="" class="">
                          <p class=" text-[1rem] font-nunito font-normal leading-[3.75rem] mx-[0.75rem]">
                            RECENT ARTICLES
                          </p>


                          <img src="../assets/icons/Line%2017_brown.svg" alt="" class="">
                      </div>

                      <div class="mt-[1.3rem] mb-[2.75rem] text-[#1B1A1A] flex text-[2.62rem] font-nunito font-normal leading-[3.75rem] z-10">
                          Read Our Latest Articles
                      </div>

                      <div class="flex justify-between w-full max-xl:h-auto max-xl:flex-col max-xl:justify-between max-xl:items-center">
                          <TheArticleCarousel v-for="item in carouselArticles" :item="item" :key="item.id"></TheArticleCarousel>
                      </div>
                    <!--  </div> -->
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
      .totalMargin{
        margin: 0 auto;
      }
      .popUpBackground{
        background: rgba(0, 0, 0, 0.39);
        z-index: 1;
      }
      .unwrap{
        margin: 0 0 0 0;
      }
      </style>