<template>
  <div class="bg-white rounded-xl border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]">
    <div class="p-4 flex gap-[6px] border-b-2 border-black">
      <div class="w-[9px] h-[9px] border-[1px] rounded-full border-[#707070] bg-[#DE4B63]"></div>
      <div class="w-[9px] h-[9px] border-[1px] rounded-full border-[#707070] bg-[#FAA722]"></div>
      <div class="w-[9px] h-[9px] border-[1px] rounded-full border-[#707070] bg-[#83C51D]"></div>
    </div>
    <div class="py-8 px-4 text-center text-gray">
      <slot>目前尚無動態，新增一則貼文吧！</slot>
    </div>
  </div>
</template>
