<template>
  <TitleComponent class="mb-4">張貼動態</TitleComponent>
  <div
    class="px-4 py-[18px] bg-white border-2 border-black rounded-lg shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]"
  >
    <label for="post" class="block mb-1">貼文內容</label>
    <textarea
      id="post"
      placeholder="輸入您的貼文內容"
      class="block w-full border-[1px] border-black mb-4 p-2"
      rows="6"
      v-model.trim="PostContent"
    ></textarea>
    <button type="button" class="bg-black py-1 px-8 text-white rounded">上傳圖片</button>
    <img src="" alt="" class="mb-8" />
    <ButtonNormal
      :disabled="PostContent === ''"
      class="w-80 mx-auto block"
      extraClass="bg-secondary text-black hover:bg-primary hover:text-white"
      >送出貼文</ButtonNormal
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

import TitleComponent from '@/components/TitleComponent.vue'
import ButtonNormal from '@/components/ButtonNormal.vue'

const PostContent = ref('')
</script>
