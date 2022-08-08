<template>
  <footer class="bg-blue-500 py-[23px] md:py-[46px]">
    <div class="container-w flex flex-col md:flex-row items-center justify-between">
      <div class="left-side">
        <span class="flex gap-8">
          <router-link to="/" class="text-black text-sm font-semibold">About us</router-link>
          <router-link to="/" class="text-black text-sm font-semibold">Terms and Services</router-link>
          <router-link to="/" class="text-black text-sm font-semibold">Privacy Policy</router-link>
          <router-link to="/" class="text-black text-sm font-semibold">Support</router-link>
        </span>
      </div>

      <div class="right-side mt-[26px] md:mt-0">
        <span class="text-black text-sm font-semibold">(c) 2022 mobytrip, All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>