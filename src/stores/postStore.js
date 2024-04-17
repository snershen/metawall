import { ref } from 'vue'
import { defineStore } from 'pinia'
const { VITE_API_URL } = import.meta.env
import axios from 'axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

export const usePostStore = defineStore('posts', () => {
  const posts = ref({})
  // const doubleCount = computed(() => count.value * 2)
  const getPosts = async () => {
    try {
      const res = await axios.get(`${VITE_API_URL}/posts`)
      posts.value = res.data.data
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const addPost = async (newPost) => {
    try {
      const res = await axios.post(`${VITE_API_URL}/post`, newPost)
      console.log(res)
      Toast.fire({
        icon: 'success',
        title: '已發佈貼文'
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getSortedPost = async (timeSort) => {
    try {
      const res = await axios.get(`${VITE_API_URL}/posts?timeSort=${timeSort}`)
      console.log(`${VITE_API_URL}/posts?timeSort=${timeSort}`)
      posts.value = res.data.data
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const getKeywordPost = async (keyword) => {
    try {
      const res = await axios.get(`${VITE_API_URL}/posts?q=${keyword}`)
      posts.value = res.data.data
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return { posts, getPosts, addPost, getSortedPost, getKeywordPost }
})
