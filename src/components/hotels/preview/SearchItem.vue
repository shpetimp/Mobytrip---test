<template>
  <div class="mb-[20px]">
    <div class="desktop hidden lg:flex  bg-white rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.3)]">
      <div class="image-block w-[294px]">
        <img src="@/assets/images/search-item.png" alt="item-image" class="h-full min-w-[294px] flex">
      </div>
      
      <div class="content pt-[20px] pb-[14px] px-[30px] flex justify-between w-full">
        <div class="left-side">
          <p class="text-black text-x22 font-extrabold mb-[9px]">1 King Bed Hearing Accessible</p>

          <div class="flex gap-4 mb-[24px]">
            <span class="flex items-center gap-2 text-black font-semibold">
              <img src="@/assets/images/user.png" alt="user-icon">
              2
            </span>

            <span class="flex items-center gap-2 text-black font-semibold">
              <img src="@/assets/images/baby-carriage.png" alt="baby-carriage-icon">
              0
            </span>
          </div>

          <div class="flex rounded-[8px] py-[5px] px-[8px] items-center mb-[15px]" style="background: rgba(19, 154, 28, 0.1);">
            <img src="@/assets/images/chat-add.png" alt="chat-add">

            <span class="ml-[5px] mr-[3px] text-green font-semibold">Free cancelation before:</span>

            <span class="text-green text-sm font-medium">08:00 AM on 20th Aug 2022</span>
          </div>

          <div class="flex gap-3 items-center mb-[15px]">
            <span class="text-grey font-medium whitespace-nowrap">Room Options</span>
            <span class="h-[2px] bg-[#E8E9F3] w-full"></span>
          </div>

          <div>
            <div class="flex items-center gap-3 mb-[15px]">
              <div class="flex items-center gap-2">
                <input id="1" type="radio" name="type" >
                <label for="1" class="text-lg text-black font-medium">Bed and breakfast</label>
              </div>

              <div class="flex rounded-[8px] py-[4px] px-[8px] items-center" style="background: rgba(19, 154, 28, 0.1);">
                <img src="@/assets/images/chat-add.png" alt="chat-add" width="12" height="12">

                <span class="ml-[5px] mr-[3px] text-green font-semibold text-xs">Free cancelation before:</span>
              </div>

            </div>

            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <input id="2" type="radio" name="type" >
                <label for="2" class="text-lg text-black font-medium">Bed and breakfast</label>
              </div>

              <div class="flex rounded-[8px] py-[4px] px-[8px] items-center" style="background: rgba(19, 154, 28, 0.1);">
                <img src="@/assets/images/chat-add.png" alt="chat-add" width="12" height="12">

                <span class="ml-[5px] mr-[3px] text-green font-semibold text-xs">Free cancelation before:</span>
              </div>

              <span class="text-sm text-black font-semibold">- 5.01 $</span>
            </div>
          </div>
        </div>

        <div class="right-side text-right w-5/12">
          <p class="text-green font-extrabold text-x22">$ 1253.00</p>
          <p class="text-gray font-medium text-xs">per night</p>

          <div class="mt-[10px] sms:mt-[15px] mb-[30px]">
            <p class="text-black font-bold text-lg sms:text-base">$ 429,00</p>
            <p class="text-xs text-gray-500 font-medium">(including taxes)</p>
          </div>
          
          <span class="mb-[28px] block">
            <router-link to="/" class="text-right text-blue font-extrabold flex gap-2 items-center justify-end">
              Details 
              <img src="@/assets/images/arrow-right.png" alt="arrow-right">
            </router-link>
          </span>

          <div class="flex gap-4 items-center justify-end">
            <span class="text-red font-semibold whitespace-nowrap">*Only 1 room left</span>

            <button class="bg-blue font-bold text-[#F8F8F8] py-[9px] rounded-[10px] w-full text-center">Reserve</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile flex lg:hidden  bg-white rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.3)]">
      <div class="content pt-[20px] pb-[14px] px-[16px] md:px-[30px] flex justify-between w-full flex-col">
        <div class="left-side">
          <div class="flex gap-2 w-full">
            <div class="image-block w-[58px] h-[58px]">
              <img src="@/assets/images/search-item.png" alt="item-image" class="h-full min-w-[58px] flex">
            </div>

            <div class="flex justify-between gap-1 w-full">
              <div>
                <p class="text-black text-sm md:text-x22 font-extrabold mb-[9px]">1 King Bed Hearing Accessible</p>

                <div class="flex gap-4 mb-[24px]">
            <span class="flex items-center gap-2 text-black font-semibold text-xs md:text-base">
              <img src="@/assets/images/user.png" alt="user-icon">
              2
            </span>

                  <span class="flex items-center gap-2 text-black font-semibold text-xs md:text-base">
              <img src="@/assets/images/baby-carriage.png" alt="baby-carriage-icon">
              0
            </span>
                </div>
              </div>


              <div class="w-[140px] text-right">
                <p class="text-green font-extrabold text-lg md:text-x22">$ 1253.00</p>
                <p class="text-gray font-medium text-xs">per night</p>

                <div class="mt-[10px] sms:mt-[15px] mb-[10px]">
                  <p class="text-black font-bold text-xs md:text-base">$ 429,00</p>
                  <p class="text-xs text-gray-500 font-medium">(including taxes)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center flex-wrap">
            <span class="block">
            <router-link to="/" class="text-right text-blue font-extrabold flex gap-2 items-center justify-end flex-wrap text-sm md:text-base">
              Details
              <img src="@/assets/images/arrow-right.png" alt="arrow-right">
            </router-link>
          </span>

            <div class="flex rounded-[8px] py-[5px] px-[8px] items-center" style="background: rgba(19, 154, 28, 0.1);">
              <img src="@/assets/images/chat-add.png" alt="chat-add" class="w-[11px] h-[11px]">

              <span class="ml-[2px] mr-[2px] text-green font-semibold text-xs md:text-base">Free cancelation before:</span>

              <span class="text-green text-xxs font-medium md:text-sm">08:00 AM on 20th Aug 2022</span>
            </div>
          </div>

          <div class="flex gap-3 items-center mb-[15px] mt-[10px]">
            <span class="text-gray font-medium whitespace-nowrap textsm md:text-base">Room Options</span>
            <span class="h-[2px] bg-[#E8E9F3] w-full"></span>
          </div>

          <div>
            <div class="flex items-center gap-3 mb-[15px]">
              <div class="flex items-center gap-2">
                <input id="1" type="radio" name="type" >
                <label for="1" class="text-x13 md:text-lg text-black font-medium ">Bed and breakfast</label>
              </div>

              <div class="flex rounded-[8px] py-[4px] px-[8px] items-center" style="background: rgba(19, 154, 28, 0.1);">
                <img src="@/assets/images/chat-add.png" alt="chat-add" width="12" height="12">

                <span class="ml-[2px] mr-[2px] text-green font-semibold text-xxs md:text-xs">Free cancelation</span>
              </div>

            </div>

            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <input id="2" type="radio" name="type" >
                <label for="2" class="text-x13 md:text-lg text-black font-medium">Bed and breakfast</label>
              </div>

              <div class="flex rounded-[8px] py-[4px] px-[8px] items-center" style="background: rgba(19, 154, 28, 0.1);">
                <img src="@/assets/images/chat-add.png" alt="chat-add" width="12" height="12">

                <span class="ml-[2px] mr-[2px] text-green font-semibold text-xxs md:text-xs">Free cancelation</span>
              </div>

              <span class="text-xs md:text-sm text-black font-semibold">- 5.01 $</span>
            </div>
          </div>
        </div>

        <div class="right-side mt-[21px]">
          <div class="flex gap-4 items-center justify-center mb-[10px]">
            <button class="bg-blue font-bold text-[#F8F8F8] py-[9px] rounded-[10px] w-full text-center">Reserve</button>
          </div>

          <div class="flex gap-4 items-center justify-center">
            <span class="text-xs md:text-base text-red font-extrabold whitespace-nowrap">*Only 1 room left</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItem"
}
</script>

<style scoped>

</style>