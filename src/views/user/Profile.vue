<template>
  <div>
    <Header />
    <div class="container-fluid pl-5 pr-5" v-if="user">
      <header-title title="Account Setting - Profile" />
      <router-view :user="user"></router-view>
    </div>
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
  <!-- Spinner when get user loading -->
</template>

<script>
// @ is an alias to /src
import Header from "../../components/Header";
import HeaderTitle from "../../components/HeaderTitle.vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Home",
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
  components: { Header, HeaderTitle },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
