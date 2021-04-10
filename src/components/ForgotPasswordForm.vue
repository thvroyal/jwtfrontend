<template>
  <div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
      <!-- Nested Row within Card Body -->
      <div class="p-5">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-3">Forgot Your Password?</h1>
          <div class="h6 text-gray-600 mb-4">
            Enter your email address and we will send you instructions to reset
            your password
          </div>
        </div>
        <form class="user">
          <div class="form-group">
            <input
              type="email"
              class="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>

          <router-link
            to="index.html"
            class="btn btn-primary btn-user btn-block"
          >
            Continue
          </router-link>
        </form>
        <hr />
        <div class="text-center">
          <router-link class="small" to="/">Back to homepage</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordForm",
};
</script>
