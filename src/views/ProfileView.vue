<template>
  <div class="wrapper mb-3">
    <div class="title relative border-2 border-black bg-white flex rounded-xl overflow-hidden">
      <div class="w-20 h-20 bg-black shrink-0"></div>
      <div class="flex items-center justify-between w-full px-4">
        <div>
          <a
            class="inline-block font-bold border-b-2 border-transparent hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer"
            >邊緣小杰</a
          >
          <p>987,987 人追蹤</p>
        </div>
        <template v-if="!isFollowed">
          <ButtonNormal
            extraClass="bg-secondary text-black hover:bg-primary hover:text-white w-auto block px-[32px] py-[6px] shrink-0"
            >追蹤</ButtonNormal
          >
        </template>
        <template v-else>
          <ButtonNormal
            extraClass="bg-[#EFECE7] text-black hover:bg-primary hover:text-white w-auto block px-[32px] py-[6px] shrink-0"
            >取消追蹤</ButtonNormal
          >
        </template>
      </div>
    </div>
  </div>
  <SearchComponent />
  <template v-if="hasContent">
    <PostComponent />
  </template>
  <template v-else>
    <ContentEmpty />
  </template>
</template>

<script setup>
import { ref } from 'vue'

import SearchComponent from '@/components/SearchComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import ContentEmpty from '@/components/ContentEmpty.vue'
import ButtonNormal from '@/components/ButtonNormal.vue'

const hasContent = ref(false)
const isFollowed = ref(true)
</script>

<style scoped>
.wrapper {
  position: relative;
}

.wrapper::before {
  content: '';
  display: block;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: -6px;
  top: 6px;
  border: solid 2px black;
  background: white;
  border-radius: 16px;
}

.title {
  z-index: 10;
}
</style>
