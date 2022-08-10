<template>
  <div>
    <div class="map mb-[40px] sms:mb-[60px]">
      <p class="title text-black mb-[3px] text-lg font-extrabold block lg:hidden">Location</p>
      <p class="mb-[15px] text-gray font-medium block lg:hidden">500 E 4th St, Austin, TX 78701, United States</p>
      <iframe
          class="rounded-[10px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12192.642440299041!2d44.489174539550795!3d40.18323900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0280bdae37%3A0xeb20aa01edce2d6b!2sHoliday%20Inn%20Express%20Yerevan%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2s!4v1659966330216!5m2!1sen!2s"
          width="100%" height="280" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="ratings">
      <p class="title text-black mb-[15px] text-lg font-extrabold">Ratings</p>

      <div class="rate flex items-center gap-3 mb-[15px]">
        <span class="py-[8px] px-[7px] bg-blue rounded-[5px] text-white text-lg font-extrabold">4.8</span>
        <span class="text-black font-bold">Very good</span>
        <span class="text-gray text-sm font-semibold">936 ratings</span>
      </div>


     <div class="statistics">
       <div class="mb-[19px]" v-for="item in 7" key="item">
         <p class="text-black font-semibold">Amenities</p>

         <div class="flex items-center gap-2">
           <div class="w-full bg-[#F8F8F8] rounded-[3px] h-[12px]">
             <div class="bg-blue-500 h-[12px] rounded-[3px]" style="width: 45%"></div>
           </div>
           <span class="text-sm text-black font-semibold">4.2</span>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratings"
}
</script>

<style scoped>

</style>