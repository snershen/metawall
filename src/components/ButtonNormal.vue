<template>
  <button type="button" :class="[defaultClass, props.extraClass]">
    <div class="font-bold">
      <slot>送出更新</slot>
    </div>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  extraClass: String
})

const defaultClass =
  'block py-4 border-2 border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg transition ease-in-out disabled:shadow-none disabled:border-[#000400] disabled:border-[2px] disabled:bg-[#A8B0B9] disabled:text-[#000400]'
</script>
