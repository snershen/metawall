<template>
  <!-- <ButtonNormal extraClass="bg-secondary text-black hover:bg-primary hover:text-white"
    >送出更新</ButtonNormal
  > -->
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

const hasContent = ref(true)
</script>
