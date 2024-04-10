<template>
  <NavbarComponent />
  <div class="bg-normal pb-12">
    <div class="pt-[64px] min-h-screen container px-3 lg:px-0">
      <div class="pt-12 flex items-start">
        <main class="md:w-8/12 w-full md:me-7">
          <RouterView />
        </main>
        <ProfileCard class="md:w-4/12 hidden md:block" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import ProfileCard from '@/components/AsideNavbar.vue'
</script>
