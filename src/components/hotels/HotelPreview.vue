<template>
  <div>
    <Gallery />
    <HotelInfo />
    <Issues />
  </div>

</template>

<script>
import Gallery from "@/components/hotels/preview/Gallery.vue";
import HotelInfo from "@/components/hotels/preview/HotelInfo.vue";
import Issues from "@/components/hotels/preview/Issues.vue";
export default {
  name: "HotelPreview",
  components:{
    Gallery,
    HotelInfo,
    Issues
  }
}
</script>