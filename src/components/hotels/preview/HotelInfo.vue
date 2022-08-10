<template>
  <div class="container-w">
    <div class="content flex justify-between mt-[21px] sms:mt-[47px] sms:mb-[60px] mb-[36px] gap-2">

      <div class="info w-full lg:w-7/12">
        <div class="title-block flex justify-between mb-[20px] gap-2">
          <div class="left-side w-[210px] sms:w-fit">
            <div class="flex items-center gap-2 mb-[9px]" >
              <span class="bg-blue-200 py-[2px] px-[8px] text-xs font-semibold text-grey rounded-[5px]" >Hotel</span>
              <div class="flex items-center gap-1">
              <span v-for="item in 5" key="item">
                <img src="@/assets/images/star.png" alt="star">
              </span>
              </div>
            </div>

            <h1 class="text-black text-lg sms:text-x32 font-extrabold mb-[10px]">Hilton Austin</h1>

            <p class="text-sm sms:text-base text-gray font-medium">500 E 4th St, Austin, TX 78701, United States</p>
          </div>

          <div class="right-side">
            <p class="text-x26 sms:text-x38 text-green font-extrabold">$ 253.00</p>
            <p class="text-xs sms:text-base text-gray font-medium text-right">Per night</p>
          </div>
        </div>

        <ul class="tabs flex flex-wrap gap-2 w-full sms:max-w-[320px] mb-[21px] sms:mb-[40px]">
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">Hotels with spa</li>
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">Green Hotel</li>
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">Bussines hotels</li>
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">Sport hotels</li>
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">Waller Creek District</li>
          <li class="text-xxs text-gray rounded-[5px] border border-blue-500 py-[3px] px-[8px] inline-flex">GDowntown Austin</li>
        </ul>

        <div class="w-full mb-[40px] block sms:hidden">
          <button class="bg-blue font-bold text-[#F8F8F8] py-[17px] rounded-[10px] w-full text-center mb-[18px]">Choose Room</button>
          <div class="bg-[#F8F8F8] w-full h-[6px]"></div>
        </div>

        <div class="description mb-[40px]">
          <p class="title text-black mb-[10px] text-lg font-extrabold">Property Description</p>
          <p class="text-sm sms:text-base text-gray font-medium mb-[15px]">Boasting a skylit indoor pool and 2 on-site dining options,
            this hotel is located across the street from Union Station.
            The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem.</p>
          <span class="inline-flex items-center gap-3 cursor-pointer">
            <span class="text-blue font-semibold">Read more</span>
            <img class="flex" src="@/assets/images/down-arrow.png" alt="down-arrow">
          </span>
        </div>

        <div class="block lg:hidden">
          <Ratings />
        </div>

        <div class="options mb-[40px]">
          <div class="mb-[40px]">
            <p class="title text-black mb-[10px] text-lg font-extrabold">The Neighborhood</p>
            <ul class="list-disc pl-[20px]">
              <li class="text-gray font-medium text-sm sms:text-base"> Waller Creek District →271.4 yards (248.1 m)</li>
              <li class="text-gray font-medium text-sm sms:text-base"> Downtown Austin →587.8 yards (537.5 m)</li>
            </ul>
          </div>

          <div class="mb-[40px]">
            <p class="title text-black mb-[10px] text-lg font-extrabold">Points of Interest</p>
            <ul class="list-disc pl-[20px]">
              <li class="text-gray font-medium text-sm sms:text-base"> Austin Visitor Center →135.1 yards (123.5 m)</li>
              <li class="text-gray font-medium text-sm sms:text-base"> O. Henry House Museum →164.7 yards (150.6 m</li>
            </ul>
          </div>

          <div class="mb-[40px]">
            <p class="title text-black mb-[10px] text-lg font-extrabold">Nearby Airports</p>
            <ul class="list-disc pl-[20px]">
              <li class="text-gray font-medium text-sm sms:text-base"> AUS: Austin, TX (AUS-Austin-Bergstrom Intl.)→6.1 miles (9.7 km)</li>
            </ul>
          </div>
        </div>

        <div class="facilities">

          <p class="title text-black mb-[5px] text-lg font-extrabold">Facilities</p>
          <p class="text-black font-medium mb-[17px]">Top facilities</p>

          <div class="block sms:flex justify-between mb-[19px] w-full sms:w-4/5">
            <ul>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Wi-fi</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Car park</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Wi-fi</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">24-hour reception</span>
              </li>
            </ul>

            <ul>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Wheelchair-accessible</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Non-smoking establishment</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Large pets allowed (over 5 kg)</span>
              </li>
              <li class="flex gap-2 items-center mb-[8px]">
                <img src="@/assets/images/wifi.png" alt="facilitie-logo">
                <span class="text-gray font-medium text-sm sms:text-base">Breakfast</span>
              </li>
            </ul>
          </div>


          <span class="inline-flex items-center gap-3 cursor-pointer">
            <span class="text-blue font-semibold">Show all facilities and services</span>
            <img class="flex" src="@/assets/images/down-arrow.png" alt="down-arrow">
          </span>
        </div>
      </div>

      <div class="hidden lg:flex">
        <Ratings />
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from "@/components/hotels/preview/Ratings.vue";

export default {
  name: "HotelInfo",
  components: {
    Ratings
  }
}
</script>

<style scoped>

</style>