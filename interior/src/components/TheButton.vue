<script setup>
import {defineProps} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: false
  },
  buttonBg: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :class="{'bg-black text-white':buttonBg,
                   'bg-inherit text-black':!buttonBg}"
          class="w-[120px] px-[0.8rem] py-[0.44rem] border-none h-[2.3rem] text-[0.87rem] font-nunito font-normal flex justify-center items-center uppercase relative mt-[1.3rem] mb-[0.6rem]">
    {{text}}
    <img src="../assets/icons/Line%207.svg" alt="" class="absolute right-[10%]  top-0">
    <img src="../assets/icons/Line%207.svg" alt="" class="absolute left-[10%] w-[100%] bottom-0">
    <img src="../assets/icons/Line%206.svg" alt="" class="absolute bottom-[-2%] left-0">
    <img src="../assets/icons/Line%206.svg" alt="" class="absolute bottom-[-27%] right-0">
  </button>
</template>

<style>

</style>