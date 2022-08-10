<template>
  <div>
    <div class="container-w hidden sms:block">
      <div class="gallery gap-2 flex">
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

    <div class="flex sms:hidden w-full">
      <carousel :items-to-show="1" class="w-full">
        <slide v-for="slide in 5" :key="slide">
          <div class="w-full">
            <img src="@/assets/images/slider-image.png" alt="image" class="w-full">
          </div>
        </slide>

        <template #addons>
          <navigation class="carousel-button"/>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: "Gallery",
  components:{
    Carousel,
    Slide,
    Navigation,
  }
}
</script>

<style>
.carousel__prev{
  border-radius: 0 5px 5px 0;
  left: 15px
}
.carousel__next{
  border-radius: 5px 0 0 5px;
  right: 15px
}
.carousel-button{
  opacity: 0.7;
  background-color: #FFFFFF !important;

}
.carousel-button svg{
  color: black;
  fill: black;
}
</style>