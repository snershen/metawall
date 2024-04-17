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
            <span class="block ml-3 truncate"> {{ selectedText }} </span>
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
                :key="item.text"
                @click="selectTarget(item)"
              >
                <a href="#" :data-query="item.query">
                  <span class="block ml-3 font-normal truncate"> {{ item.text }} </span>
                  <span
                    class="absolute inset-y-0 right-0 flex items-center pr-4"
                    v-show="selectedText === item.text"
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
          v-model.lazy="keyword"
        />
        <button
          type="button"
          class="absolute border-2 border-black inset-y-0 right-0 flex items-center text-white justify-center bg-primary aspect-square hover:bg-secondary hover:text-black"
          @click="usePostStore().getKeywordPost(keyword)"
        >
          <IconSearch />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { usePostStore } from '@/stores/postStore.js'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconChecked from '@/components/icons/IconChecked.vue'

const isShow = ref(false)
const selectedText = ref('最新貼文')
const selectedQuery = ref('asc')
const keyword = ref('')
const categoryList = reactive([
  { text: '最新貼文', query: 'desc' },
  { text: '由舊到新', query: 'asc' }
])

const changeShow = () => {
  isShow.value = !isShow.value
}

const selectTarget = async (item) => {
  selectedText.value = item.text
  selectedQuery.value = item.query
  await usePostStore().getSortedPost(selectedQuery.value)
  isShow.value = false
}

const hideDropdown = (event) => {
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
