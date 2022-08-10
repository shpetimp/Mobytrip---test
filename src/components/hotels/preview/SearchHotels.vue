<template>
  <div class="bg-[#E8E9F3]">
    <div class="container-w pt-[36px] sms:pt-[60px] pb-[40px] sms:pb-[60px]">
      <h2 class="text-black font-extrabold text-x26 mb-[20px]">Your search</h2>

      <div class="filters mb-[30px]">
        <Filters />
      </div>

      <div class="search-list">
        <p class="text-black font-extrabold text-lg mb-[20px] block lg:hidden">Choose your room</p>
        <SearchItem />
        <SearchItem />
        <SearchItem />

        <div class="desktop hidden lg:flex  bg-white rounded-[12px] shadow-item">
          <div class="image-block p-[30px]">
            <img src="@/assets/images/booking.png" alt="item-image" class="flex">
          </div>

          <div class="content pt-[20px] pb-[14px] px-[30px] flex justify-between w-full">
            <div class="left-side">
              <p class="text-black text-x22 font-extrabold mt-[5px] mb-[9px] pl-[50px]">1 King Bed Hearing Accessible</p>
            </div>

            <div class="right-side text-right w-5/12">
              <p class="text-green font-extrabold text-x22">$ 1253.00</p>
              <p class="text-gray font-medium text-xs">per night</p>

              <div class="mt-[10px] sms:mt-[15px] mb-[30px]">
                <p class="text-black font-bold text-lg sms:text-base">$ 429,00</p>
                <p class="text-xs text-gray-500 font-medium">(including taxes)</p>
              </div>

              <div class="flex gap-4 items-center justify-end">

                <button class="bg-blue font-bold text-[#F8F8F8] py-[9px] px-[69px] rounded-[10px] text-center">View Deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchItem from "@/components/hotels/preview/SearchItem.vue";
import Filters from "@/components/hotels/preview/Filters.vue";
export default {
  name: "SearchHotels",
  components: {
    Filters,
    SearchItem
  }
}
</script>

<style scoped>
.shadow-item{
 box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03), inset 0px 0px 200px rgba(125, 165, 241, 0.15);
}
</style>