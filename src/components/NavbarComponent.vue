<template>
  <header class="fixed z-50 w-full py-3 border-b-[3px] border-black bg-white">
    <div class="md:container mx-auto flex justify-between items-center px-3 lg:px-0">
      <h1 class="logo"><RouterLink :to="{ name: 'Home' }">MetaWall</RouterLink></h1>
      <div>
        <a href="#" class="flex justify-between items-center" @click.prevent="toggleDropdown">
          <img src="@/assets/img/user.png" alt="user" width="30" class="me-2.5" />
          <span class="font-mono font-bold border-b-2 border-black">Member</span>
        </a>
        <nav class="wrapper mt-2" v-if="isShow">
          <ul class="title font-bold relative border-2 border-black bg-white text-xl text-center">
            <li class="border-b-2 border-black hover:bg-[#EFECE7]">
              <a href="#" class="py-2 block" @click.prevent="hideDropdown">我的貼文牆</a>
            </li>
            <li class="border-b-2 border-black hover:bg-[#EFECE7]">
              <a href="#" class="py-2 block" @click.prevent="hideDropdown">修改個人資料</a>
            </li>
            <li class="hover:bg-[#EFECE7]">
              <a href="#" class="py-2 block" @click.prevent="hideDropdown">登出</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)

const toggleDropdown = () => {
  isShow.value = !isShow.value
}
const hideDropdown = (event) => {
  if (!event.target.classList.contains('option')) {
    isShow.value = false
  }
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 182px;
  @media (max-width: 1200px) {
    right: 20px;
  }
}

.wrapper::before {
  content: '';
  display: block;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  right: -6px;
  top: 6px;
  border: solid 2px black;
  background: white;
}

.title {
  z-index: 10;
}
</style>
