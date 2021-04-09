<template>
  <div class="bg-gradient-primary full-body">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <register-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";
export default {
  name: "Register",
  components: {
    RegisterForm,
  },
};
</script>
