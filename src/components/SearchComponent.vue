<template>
  <div class="flex mb-4">
    <div class="w-4/12 me-3">
      <div class="relative mt-1">
        <button
          type="button"
          class="option relative w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black focus:outline-none sm:text-sm"
          @click="changeShow"
        >
          <span class="flex items-center pointer-events-none">
            <span class="block ml-3 truncate"> {{ selectedItem }} </span>
          </span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
            <IconArrow />
          </span>
        </button>
        <div v-show="isShow" ref="dropdown">
          <div class="absolute z-10 w-full mt-1 bg-white shadow-lg">
            <ul
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="py-1 overflow-auto text-base border-2 border-black max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <li
                id="listbox-item-0"
                role="option"
                class="option relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-secondary hover:text-black pr-9"
                v-for="item in categoryList"
                :key="item"
                @click="selectTarget(item)"
              >
                <a href="#">
                  <span class="block ml-3 font-normal truncate"> {{ item }} </span>
                  <span
                    class="absolute inset-y-0 right-0 flex items-center pr-4"
                    v-show="selectedItem === item"
                  >
                    <IconChecked />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-8/12">
      <div class="relative mt-1">
        <input
          type="search"
          placeholder="搜尋貼文"
          class="relative w-full py-3 pl-3 pr-14 text-left bg-white border-2 border-black cursor-default focus:outline-none sm:text-sm"
        />
        <button
          type="button"
          class="absolute border-2 border-black inset-y-0 right-0 flex items-center text-white justify-center bg-primary aspect-square hover:bg-secondary hover:text-black"
        >
          <IconSearch />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconChecked from '@/components/icons/IconChecked.vue'

const isShow = ref(false)
const selectedItem = ref('最新貼文')
const categoryList = reactive(['最新貼文', '按讚數最多', '留言數最多'])

const changeShow = () => {
  isShow.value = !isShow.value
}

const selectTarget = (item) => {
  selectedItem.value = item
  isShow.value = false
}

const hideDropdown = (event) => {
  console.log(event.target.parentNode)
  // console.log(event.target.classList.contains('option'))
  if (!event.target.classList.contains('option')) {
    isShow.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', hideDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', hideDropdown)
})
</script>
