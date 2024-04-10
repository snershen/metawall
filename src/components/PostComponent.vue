<template>
  <div
    class="p-6 border-[3px] rounded-lg border-black bg-white shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]"
  >
    <!-- head -->
    <div class="flex items-center mb-4">
      <img src="@/assets/img/user.png" alt="" class="me-4" width="45" height="45" />
      <div>
        <a
          class="inline-block font-bold border-b-2 border-transparent hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer"
          >邊緣小杰</a
        ><br />
        <time class="text-xs text-gray">2022/1/10 12:00</time>
      </div>
    </div>
    <!-- content -->
    <div class="mb-5">
      <p class="mb-4">
        外面看起來就超冷....<br />
        我決定回被窩繼續睡....
      </p>
      <img src="@/assets/img/post.png" alt="圖片" class="border-black w-full" />
    </div>
    <!-- action -->
    <template v-if="hasGood">
      <div class="mb-4 flex"><IconGood class="me-2 text-primary" />1</div>
    </template>

    <template v-else>
      <div class="mb-4 flex text-gray"><IconGood class="me-2 text-gray" />成為第一個按讚的朋友</div>
    </template>

    <div class="relative flex items-center mb-5">
      <img src="@/assets/img/user.png" alt="" class="aspect-square me-2 shrink-0" width="40" />
      <input
        type="text"
        placeholder="留言..."
        class="w-full py-3 pl-3 pe-[140px] text-left bg-white border-2 border-black shadow-lg cursor-default focus:outline-none sm:text-sm"
      />
      <button
        type="button"
        class="absolute border-2 border-black inset-y-0 right-0 justify-center bg-primary px-12 text-nowrap text-white hover:bg-secondary hover:text-black"
      >
        留言
      </button>
    </div>

    <!-- message -->
    <ul>
      <li>
        <div class="mb-4 bg-[rgba(239,236,231,0.3)] px-4 py-5 rounded-xl">
          <div class="flex items-center mb-1">
            <img src="@/assets/img/user.png" alt="" class="me-4" width="40" height="40" />
            <div>
              <p>邊緣小杰</p>
              <time class="text-xs text-gray">2022/1/10 12:00</time>
            </div>
          </div>
          <p class="ms-14">真的～我已經準備冬眠了</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconGood from '@/components/icons/IconGood.vue'

const hasGood = ref(true)
</script>
