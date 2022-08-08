<template>
  <div class="app-wrapper">
    <AuthHeader />

    <Breadcrumbs />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import AuthHeader from "@/components/headers/AuthHeader.vue";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import Footer from "@/components/Footer.vue";
export default {
  components:{
    AuthHeader,
    Breadcrumbs,
    Footer
  }
}
</script>

<style scoped>

</style>
