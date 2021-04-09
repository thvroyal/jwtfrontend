<template>
  <div class="bg-gradient-primary full-body">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-9">
          <forgot-password-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForgotPasswordForm from "../components/ForgotPasswordForm.vue";
export default {
  name: "ForgotPassword",
  components: {
    ForgotPasswordForm,
  },
};
</script>
