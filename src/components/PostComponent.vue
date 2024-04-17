<template>
  <div
    class="p-6 border-[3px] rounded-lg border-black bg-white shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]"
    v-for="post in postStore.posts"
    :key="post._id"
  >
    <!-- head -->
    <template v-if="post.user">
      <div class="flex items-center mb-4" @click="toggleAction">
        <img
          :src="post.user.photo"
          :alt="post.user.name"
          class="me-4 rounded-full"
          width="45"
          height="45"
        />
        <div>
          <a
            class="inline-block font-bold border-b-2 border-transparent hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer"
            >{{ post.user.name }}</a
          ><br />
          <time class="text-xs text-gray">{{ formatTime(post.createdAt) }}</time>
        </div>
      </div>
    </template>

    <!-- content -->
    <div class="mb-5" @click="toggleAction">
      <p class="mb-4">
        {{ post.content }}
      </p>
      <template v-if="post.image !== ''">
        <div class="border-2 border-black w-full overflow-hidden rounded-lg">
          <img :src="post.image" alt="圖片" />
        </div>
      </template>
    </div>

    <!-- action -->
    <!-- <div v-show="isShow">
      <template v-if="post.like > 0">
        <div class="mb-4 flex"><IconGood class="me-2 text-primary" />1</div>
      </template>
      <template v-else>
        <div class="mb-4 flex text-gray">
          <IconGood class="me-2 text-gray" />成為第一個按讚的朋友
        </div>
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
      </div> -->
    <!-- message -->
    <!-- <ul>
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
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePostStore } from '@/stores/postStore.js'
// import IconGood from '@/components/icons/IconGood.vue'

const postStore = usePostStore()
const isShow = ref(false)

const toggleAction = () => {
  isShow.value = !isShow.value
}

const formatTime = (timeString) => {
  const dateTime = new Date(timeString)
  const year = String(dateTime.getFullYear())

  const obj = {
    month: String(dateTime.getMonth() + 1),
    day: String(dateTime.getDate()),
    hour: String(dateTime.getHours()),
    minute: String(dateTime.getMinutes())
  }

  const arr = Object.keys(obj)

  arr.forEach((item) => {
    if (obj[item] < 10) {
      obj[item] = 0 + obj[item]
    }
  })

  const formattedTime = `${year}-${obj.month}-${obj.day} ${obj.hour}:${obj.minute}`
  return formattedTime
}

onMounted(async () => {
  await postStore.getPosts()
})
</script>
