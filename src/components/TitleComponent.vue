<template>
  <div class="wrapper">
    <div
      class="title font-bold relative border-2 border-black bg-white text-xl text-center py-[18px]"
    >
      <slot>張貼動態</slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.wrapper::before {
  content: '';
  display: block;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: -6px;
  top: 6px;
  border: solid 2px black;
  background: white;
}

.title {
  z-index: 10;
}
</style>
