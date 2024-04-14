<template>
  <div
    class="px-4 py-[18px] bg-white border-2 border-black rounded-lg shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] flex justify-between items-end"
  >
    <div class="flex items-end">
      <img src="@/assets/img/user.png" alt="" class="me-4" />
      <div>
        <a
          class="inline-block font-bold border-b-2 border-transparent hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer"
          >邊緣小杰</a
        >
        <p class="text-gray text-sm">追蹤時間：<time>2022/1/10 12:00</time></p>
      </div>
    </div>
    <slot>
      <p class="text-sm">您已追蹤 90 天！</p>
    </slot>
  </div>
</template>
