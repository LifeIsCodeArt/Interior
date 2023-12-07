<script setup>
import {defineProps} from "vue";
const props = defineProps({
  client: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>
    <div class="w-[16rem] h-[19.62rem] flex flex-col items-center relative px-[1.37rem] border bg-[#FFF]">
        <div class="absolute top-[-2rem] border rounded-[50%] bg-gray-400 w-[6.94rem] h-[6.94rem] overflow-hidden">
          <img :src="client.image" alt="" class=" h-[6rem] overflow-hidden mt-3">
        </div>
        <p class="text-[#1B1A1A] font-normal font-nunito text-[1.5rem] leading-[2.12rem] mb-[0.8rem] mt-[5.8rem]">
            {{client.name}}
        </p>
        <p class="text-[#999] font-nunito font-normal text-[0.875rem] leading-[1.5rem]">
            {{client.job}}
        </p>
        <div class="w-full border-b-2 border-[#E0E0E0] flex items-center justify-center my-[0.55rem]">
            <img src="../assets/icons/Single%20Star.svg" alt="" class="">
        </div>

        <div class="text-[#999] font-nunito font-thin text-center text-[0.875rem] leading-[1.5rem]" v-html="client.bio"></div>

    </div>
</template>

<style scoped>

</style>