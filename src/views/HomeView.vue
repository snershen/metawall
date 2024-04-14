<template>
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

const hasContent = ref(true)
</script>
