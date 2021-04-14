<template>
  <div class="card-body p-0">
    <!-- Nested Row within Card Body -->
    <div class="row">
      <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
      <div class="col-lg-6">
        <div class="p-5">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
            <div v-if="msg" class="alert alert-danger" role="alert">
              {{ msg }}
            </div>
          </div>
          <form class="user" @submit.prevent="handleSubmit">
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email Address..."
                v-model="email"
              />
            </div>
            <input-password v-model="password" :checkCapslock="true" />
            <div class="form-group">
              <div
                class="custom-control custom-checkbox small d-flex justify-content-end"
              >
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck"
                />
                <label class="custom-control-label" for="customCheck"
                  >Remember Me</label
                >
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-user btn-block">
              Login
            </button>
            <hr />
            <a href="index.html" class="btn btn-google btn-user btn-block">
              <i class="fab fa-google fa-fw"></i> Login with Google
            </a>
            <a href="index.html" class="btn btn-facebook btn-user btn-block">
              <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
            </a>
          </form>
          <hr />
          <div class="text-center">
            <router-link class="small" to="/forgot-password"
              >Forgot Password?</router-link
            >
          </div>
          <div class="text-center">
            <router-link class="small" to="/register"
              >Create an Account!</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InputPassword from "./InputPassword.vue";
export default {
  components: { InputPassword },
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        let { data } = response;
        if (data.code) {
          // if login is success
          localStorage.setItem("token", response.data["access_token"]);
          this.msg = ""; //no errors
          this.$router.push("/");
        }
        if (!data.code) {
          // if response code = 0 displat msg error
          this.msg = data.msg;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
