<template>
  <TitleComponent class="mb-4">我按讚的貼文</TitleComponent>
  <template v-if="hasPost">
    <ul>
      <li>
        <FollowerCard>
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
        </FollowerCard>
      </li>
    </ul>
  </template>
  <template v-else>
    <EmptyContent>目前尚未按讚任何貼文</EmptyContent>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue'
import EmptyContent from '@/components/EmptyContent.vue'
import FollowerCard from '@/components/FollowerCard.vue'
import IconGood from '@/components/icons/IconGood.vue'
import IconArrowCircle from '@/components/icons/IconArrowCircle.vue'

const hasPost = ref(true)
</script>
