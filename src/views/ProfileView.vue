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
        <ButtonNormal
          extraClass="bg-secondary text-black hover:bg-primary hover:text-white w-auto block px-[32px] py-[6px] shrink-0"
          >追蹤</ButtonNormal
        >
      </div>
    </div>
  </div>
  <SearchComponent />
  <template v-if="hasContent">
    <PostComponent />
  </template>
  <template v-else>
    <EmptyContent />
  </template>
</template>

<script setup>
import { ref } from 'vue'

import SearchComponent from '@/components/SearchComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import EmptyContent from '@/components/EmptyContent.vue'
import ButtonNormal from '@/components/ButtonNormal.vue'

const hasContent = ref(true)
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
