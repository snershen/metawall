<template>
  <TitleComponent class="mb-4">我按讚的貼文</TitleComponent>
  <template v-if="hasPost">
    <ul>
      <li>
        <ProfileCard>
          <div>
            <button type="button" class="px-4 font-bold">
              <IconGood class="text-primary inline w-5 h-5 mb-1" /><span class="block text-sm"
                >取消</span
              >
            </button>
            <button type="button" class="px-4 font-bold">
              <IconArrowCircle class="inline w-5 h-5 mb-1" /><span class="block text-center text-sm"
                >查看</span
              >
            </button>
          </div>
        </ProfileCard>
      </li>
    </ul>
  </template>
  <template v-else>
    <ContentEmpty>目前尚未按讚任何貼文</ContentEmpty>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue'
import ContentEmpty from '@/components/ContentEmpty.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import IconGood from '@/components/icons/IconGood.vue'
import IconArrowCircle from '@/components/icons/IconArrowCircle.vue'

const hasPost = ref(true)
</script>
