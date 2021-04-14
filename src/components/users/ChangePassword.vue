<template>
  <div class="container mt-4 d-flex justify-content-center">
    <div class="card mb-4 w-50">
      <div class="card-header">Change your password</div>
      <div class="card-body">
        <div v-if="msg" class="alert alert-success" role="successfully">
          {{ msg }}
        </div>
        <div v-if="err" class="alert alert-danger" role="alert">
          {{ err }}
        </div>
        <form @submit.prevent="handleChange" class="user">
          <div class="form-group">
            <label class="small mb-1" for="inputOldPassword"
              >Old Password</label
            >
            <input-password v-model="oldPassword" :checkCapslock="false" />
          </div>
          <div class="form-group">
            <label class="small mb-1" for="inputNewPassword"
              >New Password</label
            >
            <input-password v-model="newPassword" :checkCapslock="false" />
          </div>
          <div class="form-group">
            <label class="small mb-1" for="inputConfirmPassword"
              >Confirm Password</label
            >
            <input-password v-model="confirmPassword" :checkCapslock="false" />
          </div>
          <!-- Form Row-->

          <button class="btn btn-primary" type="submit">Change Password</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InputPassword from "../InputPassword.vue";
export default {
  components: { InputPassword },
  name: "ChangePassword",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      msg: "",
      err: "",
    };
  },
  methods: {
    async handleChange() {
      if (this.newPassword === this.confirmPassword) {
        try {
          const response = await axios({
            url: "/change_password",
            method: "POST",
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
            data: {
              oldPassword: this.oldPassword,
              newPassword: this.newPassword,
            },
          });
          const { data } = response;
          if (data.code) {
            this.msg = "Change password successfully";
            this.err = "";
            this.oldPassword = "";
            this.newPassword = "";
            this.confirmPassword = "";
          } else {
            this.msg = "";
            this.err = data.msg;
          }
        } catch (error) {
          console.error(error);
          this.err = "Something wrong, try again!";
        }
      }
    },
  },
};
</script>
