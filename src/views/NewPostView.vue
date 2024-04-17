<template>
  <TitleComponent class="mb-4">張貼動態</TitleComponent>
  <div
    class="px-4 py-[18px] bg-white border-2 border-black rounded-lg shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]"
  >
    <label for="post-content" class="block mb-2">貼文內容</label>
    <textarea
      id="post-content"
      placeholder="輸入您的貼文內容"
      class="block w-full border-[1px] border-black mb-4 p-2"
      rows="6"
      v-model.trim="postData.content"
    ></textarea>
    <!-- <button type="button" class="bg-black py-1 px-8 text-white rounded">上傳圖片</button> -->
    <label for="post-image" class="block mb-2">貼文圖片</label>
    <input
      type="text"
      id="post-image"
      v-model.trim="postData.image"
      class="block w-full border-[1px] border-black mb-4 p-2"
      placeholder="請輸入圖片網址"
    />
    <img :src="postData.image" alt="" class="mb-8" />
    <ButtonNormal
      @click="addPostAction(postData)"
      :disabled="postData.content === undefined || postData.content === ''"
      class="w-80 mx-auto block"
      extraClass="bg-secondary text-black hover:bg-primary hover:text-white"
      >送出貼文</ButtonNormal
    >
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { usePostStore } from '@/stores/postStore.js'

import TitleComponent from '@/components/TitleComponent.vue'
import ButtonNormal from '@/components/ButtonNormal.vue'

const postData = reactive({ user: '661fbae161d981f86962e60c' })
const postStore = usePostStore()

const addPostAction = (postData) => {
  postStore.addPost(postData)
  postData.content = ''
  postData.image = ''
}
</script>
