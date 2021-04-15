<template>
  <div class="row mt-5 ml-5">
    <div class="col-8 position-relative">
      <LineChart />
    </div>
  </div>
</template>
<script>
import LineChart from "../../components/LineChar.vue";
export default {
  name: "Screen A",
  components: { LineChart },
};
</script>
