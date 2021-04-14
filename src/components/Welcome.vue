<template>
  <div class="card mb-3">
    <div class="card-body text-center p-5">
      <img :src="require('@/assets/visual.svg')" style="width: 35%" alt="" />
      <h5 class="font-weight-bold text-primary">Welcome back</h5>
      <p>You can create, edit, delete anything here.</p>
      <router-link to="#" class="btn btn-primary btn-lg">
        Get Start
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Welcome",
};
</script>
