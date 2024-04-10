<template>
  <TitleComponent class="mb-4">追蹤名單</TitleComponent>
  <template v-if="hasFollowers">
    <ul>
      <li>
        <FollowerCard />
      </li>
    </ul>
  </template>
  <template v-else>
    <EmptyContent>目前尚未追蹤任何人</EmptyContent>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue'
import EmptyContent from '@/components/EmptyContent.vue'
import FollowerCard from '@/components/FollowerCard.vue'

const hasFollowers = ref(true)
</script>
