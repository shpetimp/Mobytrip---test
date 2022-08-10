<template>
  <div>
    <div class="bg-blue-500 py-[13px] ">
      <div class="content container-w flex items-center gap-2">
        <img class="cursor-pointer" src="@/assets/images/left-arrow.png" alt="arrow">
        <span class="font-semibold">See all hotels in Austin</span>
      </div>
    </div>
    <div class="container-w py-[12px] gap-3 hidden sms:flex">
      <div class="flex gap-3 items-center">
        <router-link to="/" class="text-gray font-medium text-sm cursor-pointer">Home</router-link>
        <img src="@/assets/images/breadcrumb.png" alt="breadcrumb">
      </div>

      <div class="flex gap-3 items-center">
        <router-link to="/"  class="text-gray font-medium text-sm cursor-pointer">Texas</router-link>
        <img src="@/assets/images/breadcrumb.png" alt="breadcrumb">
      </div>

      <div class="flex gap-3 items-center">
        <router-link to="/" class="text-gray font-medium text-sm cursor-pointer">Austin</router-link>
        <img src="@/assets/images/breadcrumb.png" alt="breadcrumb">
      </div>

      <div class="">
        <span class="text-blue font-medium text-sm">Hilton Austin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
}
</script>

<style scoped>

</style>