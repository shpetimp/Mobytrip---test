<template>
  <div class="bg-white rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.3)] flex flex-col max-w-[156px] sms:max-w-[295px]">
    <img src="@/assets/images/search-image.png" alt="hotel-item" class="h-[117px] sms:h-auto">
    <div class="px-[16px] pt-[23px] pb-[14px] flex flex-col sms:flex-row">
      <div class="left-side max-w-[144px]">
        <p class="text-black font-semibold mb-[4px] sms:mb-[8px] text-sm sms:text-x15">Shangri-La Toronto</p>
        <p class="text-gray text-xs font-medium block sms:hidden mb-[12px]">500 E 4th St, Austin, TX 78701, United States</p>
        <div class="flex gap-2 mb-[12px]">
          <img src="@/assets/images/small-star.png" alt="star">
          <img src="@/assets/images/small-star.png" alt="star">
          <img src="@/assets/images/small-star.png" alt="star">
          <img src="@/assets/images/small-star.png" alt="star">
          <img src="@/assets/images/small-star.png" alt="star">
        </div>
        <p class="text-gray text-xs font-medium hidden sms:block">500 E 4th St, Austin, TX 78701, United States</p>
        <p class="text-gray text-xs font-medium block sms:hidden mb-[4px] flex items-center gap-2">
          <img src="@/assets/images/help.png" alt="help">
          $ 305,91
        </p>
      </div>

      <div class="right-side text-left sms:text-right">
        <p class="text-green font-extrabold text-x22">$ 354,00</p>
        <p class="text-gray font-medium text-xs">per night</p>

        <div class="mt-[10px] sms:mt-[2px]">
          <p class="text-black font-bold text-xs sms:text-base">$ 429,00</p>
          <p class="text-xs text-gray-500 font-medium">includes taxes & fees</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelItem"
}
</script>

<style scoped>

</style>