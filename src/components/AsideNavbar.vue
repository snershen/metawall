<template>
  <aside class="border-2 border-black px-6 py-8 bg-white">
    <RouterLink :to="{ name: 'Post' }">
      <ButtonNormal
        extraClass="w-full mb-6 bg-primary text-white hover:bg-secondary hover:text-black"
        >張貼動態</ButtonNormal
      >
    </RouterLink>
    <ul>
      <li>
        <RouterLink :to="{ name: 'Profile' }" class="flex items-center mb-5">
          <img src="@/assets/img/user.png" alt="user" width="50" class="me-4" />
          <span class="font-bold">邊緣小杰</span>
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink
          :to="{ name: 'Followers' }"
          class="flex items-center font-bold group-hover:text-primary mb-5"
          ><span
            class="block border-2 border-black rounded-full w-[50px] h-[50px] flex items-center justify-center aspect-square bg-[#E2EDFA] me-4 group-hover:bg-primary group-hover:text-white"
            ><IconBell class="w-5 h-5" /></span
          >追蹤名單</RouterLink
        >
      </li>
      <li class="group">
        <RouterLink
          :to="{ name: 'Like' }"
          class="flex items-center font-bold group-hover:text-primary"
          ><span
            class="block border-2 border-black rounded-full w-[50px] h-[50px] flex items-center justify-center aspect-square bg-[#E2EDFA] me-4 group-hover:bg-primary group-hover:text-white"
            ><IconGood class="w-5 h-5" /></span
          >我按讚的文章</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<script setup>
import IconBell from '@/components/icons/IconBell.vue'
import IconGood from '@/components/icons/IconGood.vue'
import ButtonNormal from '@/components/ButtonNormal.vue'
</script>
