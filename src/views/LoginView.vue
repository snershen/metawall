<template>
  <div class="bg-normal min-h-screen flex justify-center items-center">
    <div class="container login-card">
      <div class="flex items-center bg-[#EFECE7] px-12 py-[70px] border-[2px] border-[#000400]">
        <div class="w-1/2">
          <img src="@/assets/img/login.svg" alt="" />
        </div>
        <div class="w-1/2">
          <div class="text-center mb-9">
            <h1 class="logo text-[60px] text-primary">MetaWall</h1>
            <h2 class="text-2xl font-bold">到元宇宙展開全新社交圈</h2>
          </div>
          <form action="">
            <ul class="mb-8">
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  v-model="userData.email"
                  class="font-mono relative w-full py-3 pl-3 pr-14 text-left bg-white border-2 border-black cursor-default focus:outline-none sm:text-sm placeholder:text-[#9B9893] mb-4"
                />
              </li>
              <li>
                <input
                  type="password"
                  placeholder="password"
                  v-model="userData.password"
                  class="font-mono relative w-full py-3 pl-3 pr-14 text-left bg-white border-2 border-black cursor-default focus:outline-none sm:text-sm placeholder:text-[#9B9893] mb-4"
                />
              </li>
            </ul>
            <button
              :disabled="checkValue(userData)"
              type="button"
              class="bg-secondary text-black w-full block py-4 border-2 border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg transition ease-in-out disabled:shadow-none disabled:border-[2px] disabled:bg-[#A8B0B9] disabled:bg-[#A8B0B9] disabled:text-white disabled:border-[#808080] hover:bg-primary hover:text-white"
            >
              登入
            </button>
            <RouterLink
              :to="{ name: 'Signup' }"
              type="button"
              class="w-full block py-4 rounded-lg text-center"
            >
              註冊帳號
            </RouterLink>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const userData = reactive({
  email: '',
  password: ''
})

const checkValue = (obj) => {
  const arr = Object.values(obj)
  let isEmpty = arr.some((item) => {
    return item === ''
  })
  const result = arr.length === 0 || isEmpty
  return result
}
</script>

<style scoped>
.login-card {
  max-width: 869px;
}
</style>
