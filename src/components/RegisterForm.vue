<template>
  <div class="card-body p-0">
    <!-- Nested Row within Card Body -->
    <div class="row">
      <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
      <div class="col-lg-7">
        <div class="p-5">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
            <div v-if="msg" class="alert alert-danger" role="alert">
              {{ msg }}
            </div>
          </div>
          <form class="user" @submit.prevent="handleSubmit">
            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="exampleFirstName"
                  placeholder="First Name"
                  v-model="first_name"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-user"
                  id="exampleLastName"
                  placeholder="Last Name"
                  v-model="last_name"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-user"
                id="exampleInputEmail"
                placeholder="Email Address"
                v-model="email"
              />
            </div>
            <input-password v-model="password" />
            <button type="submit" class="btn btn-primary btn-user btn-block">
              Register
            </button>
            <hr />
            <router-link to="#" class="btn btn-google btn-user btn-block">
              <i class="fab fa-google fa-fw"></i> Register with Google
            </router-link>
            <router-link to="#" class="btn btn-facebook btn-user btn-block">
              <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
            </router-link>
          </form>
          <hr />
          <div class="text-center">
            <router-link class="small" to="forgot-password"
              >Forgot Password?</router-link
            >
          </div>
          <div class="text-center">
            <router-link class="small" to="/login"
              >Already have an account? Login!</router-link
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
  name: "RegisterForm",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        });
        let { data } = response;
        if (data.code) {
          this.$router.push("/login");
          this.msg = "";
        } else {
          this.msg = data.msg;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
