<template>
  <header class="bg-blue">
    <div class="container-w flex items-center justify-between py-2 sms:py-8">
      <span class="flex">
        <img src="@/assets/images/mobytrip.png" class="w-[109px] sms:w-auto h-[25px] sms:h-auto" alt="image">
      </span>

      <div class="hidden sms:flex gap-10 items-center">
        <div class="relative">
          <span
              @click="show = !show"
              class="rounded-[8px] flex items-center gap-2 text-sm font-semibold text-white text-sm bg-[#ffffff40] py-[5px] px-[16px] cursor-pointer">
            USD
            <img src="@/assets/images/down.png" alt="down">
          </span>

          <ul v-if="show" class="bg-white px-[5px] py-[7px] w-full absolute">
            <li class="border-b border-[#ccc] cursor-pointer">RUB</li>
            <li class="border-b border-[#ccc] cursor-pointer">EUR</li>
            <li class="cursor-pointer">RUB</li>
          </ul>
        </div>

        <button class="bg-white py-[9px] px-[41px] text-blue rounded-[10px] font-semibold">Log in</button>
      </div>

      <span class="flex sms:hidden">
        <img src="@/assets/images/sort.png" alt="sort">
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "AuthHeader",
  data(){
    return{
      show: false
    }
  }
}
</script>

<style scoped>

</style>