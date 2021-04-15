<template>
  <div class="card mb-3">
    <div class="card-body text-center p-5">
      <img :src="require('@/assets/visual.svg')" style="width: 35%" alt="" />
      <h5 class="font-weight-bold text-primary">Welcome back</h5>
      <p>You can create, edit, delete anything here.</p>
      <router-link to="/screenA" class="btn btn-primary btn-lg mr-5">
        Go to Admin Panel
      </router-link>
      <router-link to="/screenB" class="btn btn-primary btn-lg">
        Go to User Panel
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Welcome",
};
</script>
