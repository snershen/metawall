<template>
  <SearchComponent />
  <template v-if="postStore.posts.length > 0">
    <div class="flex flex-col gap-4">
      <PostComponent />
    </div>
  </template>
  <template v-else-if="postStore.posts.length === 0">
    <ContentEmpty>查無相關貼文</ContentEmpty>
  </template>
  <template v-else>
    <ContentEmpty />
  </template>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePostStore } from '@/stores/postStore.js'

import SearchComponent from '@/components/SearchComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import ContentEmpty from '@/components/ContentEmpty.vue'

const postStore = usePostStore()

onMounted(async () => {
  await postStore.getPosts()
})
</script>
