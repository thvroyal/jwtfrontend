<template>
  <div class="bg-gradient-primary full-body">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <login-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style>
.full-body {
  height: 100%;
}
</style>
