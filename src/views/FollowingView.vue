<template>
  <TitleComponent class="mb-4">追蹤名單</TitleComponent>
  <template v-if="hasFollowers">
    <ul>
      <li>
        <ProfileCard />
      </li>
    </ul>
  </template>
  <template v-else>
    <ContentEmpty>目前尚未追蹤任何人</ContentEmpty>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue'
import ContentEmpty from '@/components/ContentEmpty.vue'
import ProfileCard from '@/components/ProfileCard.vue'

const hasFollowers = ref(true)
</script>
