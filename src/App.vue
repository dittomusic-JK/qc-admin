<template>
  <div class="min-h-screen bg-surface">
    <SideNav />
    <div class="ml-[232px] flex flex-col min-h-screen">
      <TopBar />
      <main class="flex-1 px-6 py-5 max-w-[1440px] w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideNav from './components/layout/SideNav.vue'
import TopBar from './components/layout/TopBar.vue'
</script>
