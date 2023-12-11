<script setup>
    import TheButton from '../components/TheButton.vue'
    import {defineProps} from "vue";
    const props = defineProps({
      item: {
        type: Object,
        default: () => {}
      }
    })
</script>
w
<template>

    <div class="w-[21.9rem] h-[28rem] bg-[#E5E6E6] pl-[1.94rem] pt-[3.1rem] max-xl:my-[3rem]">
        <div class="font-nunito text-[1.875rem] mb-[1rem]  h-[5rem]" v-html="item.label.replaceAll('\n', `<br>`)">

        </div>

        <TheButton :text="'Show Now'" :button-bg="false"></TheButton>

        <div class="mt-[1rem] w-full flex justify-center items-end ">
            <img :src="item.imageLink" alt="" class="">
        </div>
    </div>

</template>

<style scoped>

</style>