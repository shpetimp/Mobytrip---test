<template>
  <div>
    <div class="container-w">
      <div class="gallery flex gap-2">
        <span>
          <img src="@/assets/images/hotel-room1.png" alt="hotel-room">
        </span>

        <div class="list">
          <div class="flex gap-1 mb-[4px]">
            <span>
            <img src="@/assets/images/hotel-room2.png" alt="hotel-room">
          </span>
            <span>
            <img src="@/assets/images/hotel-room2.png" alt="hotel-room">
          </span>
          </div>

          <div class="flex gap-1">
            <span>
            <img src="@/assets/images/hotel-room2.png" alt="hotel-room">
          </span>
            <span class="relative">
              <img src="@/assets/images/hotel-room2.png" alt="hotel-room">

              <span class="absolute right-[15px] bottom-[15px] rounded-[5px] bg-[#ffffffc9] backdrop-blur-sm flex items-center gap-2 py-[4px] px-[9px]">
               <img class="flex" src="@/assets/images/box-fill.png" alt="box-fill">
                <span class="text-sm font-extrabold">104+</span>
              </span>

            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery"
}
</script>

<style scoped>

</style>