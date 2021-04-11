<template>
  <div>
    <div v-if="user">
      <Header />
      <div class="container-fluid">
        <div class="card mb-3">
          <div class="card-body text-center p-5">
            <img
              :src="require('@/assets/visual.svg')"
              style="width: 35%"
              alt=""
            />
            <h5 class="font-weight-bold text-primary">Welcome back</h5>
            <p>You can create, edit, delete anything here.</p>
            <router-link to="#" class="btn btn-primary btn-lg">
              Get Start
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Spinner when get user loading -->
    <div
      v-if="!user"
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div
        class="spinner-border text-primary"
        style="width: 5rem; height: 5rem"
        role="status"
      ></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  components: { Header },
  async created() {
    try {
      const response = await axios.get("/", {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response;
      if (data.code) this.$store.dispatch("user", data.infoUser);
    } catch (error) {
      console.log(error);
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
