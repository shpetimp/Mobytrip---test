<template>
  <div class="flex justify-between gap-5 flex-col md:flex-row">
    <div class="relative">
      <span v-if="date.length" class="absolute z-10 text-xs text-gray left-[42px] top-[7px]">Check In - Check out</span>
      <VueDatepickerUi v-model="date" :range="true" lang="en" placeholder="Check In - Check out" class="datepicker" :class="{'added': date.length}"/>
    </div>


    <div class="bg-white rounded-[10px] py-[9px] px-[15px] min-w-full sms:min-w-[250px] lg:min-w-[400px] flex gap-2 items-center">
      <span>
        <img src="@/assets/images/user1.png" alt="user">
      </span>
      <div>
        <p class="text-gray text-xs font-medium mb-[2px]">Rooms and guests</p>
        <p class="font-medium text-black">1 room, 2 travelers</p>
      </div>
    </div>

    <button class="bg-blue font-bold text-[#F8F8F8] py-[18px] rounded-[10px] w-full text-center">Update Rooms</button>
  </div>
</template>

<script>
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';
export default {
  name: "Filters",
  components:{
    VueDatepickerUi
  },
  data(){
    return{
      date: []
    }
  }
}
</script>

<style >
.datepicker{
  border-radius: 10px;
  height: 60px;
  width: 400px;
}
.datepicker .input-field{
  height: 100%;
  width: 400px;
}
.datepicker input{
  border-radius: 10px !important;
  height: 60px !important;
  width: 400px !important;
}
.datepicker svg path{
  fill: #C3D7F3;
}

.added input{
  padding-top: 20px;
  color: #1E1C2A !important;
  font-weight: 500 !important;
  font-size: 16px !important;
}

@media (max-width: 991px) {
  .datepicker{
    width: 250px;
  }
  .datepicker .input-field{
    height: 100%;
    width: 250px;
  }
  .datepicker input{
    width: 250px !important;
  }
}

@media (max-width: 760px) {
  .datepicker{
    width: 100%;
  }
  .datepicker .content{
    flex-direction: column;
  }
  .datepicker .input-field{
    min-width: 100% !important;
  }
}
</style>