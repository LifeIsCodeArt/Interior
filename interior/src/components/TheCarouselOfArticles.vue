<script setup>
import {defineProps} from "vue";
import TheButton from "../components/TheButton.vue"

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>

    <div class="flex flex-col w-[21.8rem] h-[31rem] mb-[8.38rem]">
        <div class="">
          <img :src="item.imageLink" alt="" class="">
        </div>

        <div class="border border-[#ACACAC] px-[1.8rem] pt-[2.31rem] pb-[1.56rem] relative flex flex-col ">

          <div class="absolute top-[-2.2rem] left-[1.8rem] flex flex-col items-center  bg-white border-b-4  border-b-[#B47139] w-[2.6rem] h-[2.9rem]">

              <p class="font-nunito font-semibold text-[1.06rem] leading-[1.87rem] h-[0.9rem]">
                {{item.currentDate}}
              </p>
            <span class="font-nunito font-normal text-[0.75rem] leading-[1.87rem] mt-[0.1rem] h-[0.8rem]">{{item.currentMonth}}</span>

          </div>

          <div class="flex items-center">
                <div class="flex items-center">
                    <img src="../assets/icons/Avatar.png" alt="" class="h-[0.85rem] w-[0.92rem]">
                    <p class="text-[#808080] font-nunito font-thin leading-[1.75rem] ml-[0.44rem]">{{item.author}}</p>
                </div>

                <div class="flex items-center ml-[1.7rem]">
                    <img src="../assets/icons/Comments.png" alt="" class="h-[0.94rem] w-[0.88rem]">
                    <p class="text-[#808080] font-nunito font-thin leading-[1.75rem] ml-[0.44rem]">{{item.comments}} comments</p>
                </div>
          </div>
              <div class="text-[#2E2D2D] mt-[0.63rem] mb-[0.82rem] text-[1.25rem] font-nunito font-normal leading-[1.875rem]" v-html="item.label">

              </div>



          <TheButton :text="'See more Product'" :button-bg="false"></TheButton>

        </div>
    </div>
</template>

<style scoped>

</style>