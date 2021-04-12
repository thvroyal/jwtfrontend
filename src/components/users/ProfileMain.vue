<template>
  <main>
    <!-- Main page content-->
    <div class="container mt-4" v-if="profile">
      <!-- Account page navigation-->
      <div class="row">
        <div class="col-xl-4">
          <!-- Profile picture card-->
          <div class="card">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <!-- Profile picture image-->
              <img
                class="img-account-profile rounded-circle mb-2"
                src="
                  https://i.pravatar.cc/250?u=your_profile
                "
                alt=""
              />
              <!-- Profile picture help block-->
              <div class="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <!-- Profile picture upload button-->
              <button class="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <!-- Account details card-->
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <!-- Form Group (username)-->
                <!-- <div class="form-group">
                  <label class="small mb-1" for="inputUsername"
                    >Username (how your name will appear to other users on the
                    site)</label
                  >
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username"
                  />
                </div> -->
                <!-- Form Row-->
                <div class="form-row">
                  <!-- Form Group (first name)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputFirstName"
                      >First name</label
                    >
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      :value="profile.first_name"
                      :readonly="isEditable"
                    />
                  </div>
                  <!-- Form Group (last name)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputLastName"
                      >Last name</label
                    >
                    <input
                      class="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      :value="profile.last_name"
                      :readonly="isEditable"
                    />
                  </div>
                </div>
                <!-- Form Row        -->
                <div class="form-row">
                  <!-- Form Group (organization name)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputOrgName"
                      >Organization name</label
                    >
                    <input
                      class="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Update your organization"
                      :value="profile.organization"
                      :readonly="isEditable"
                    />
                  </div>
                  <!-- Form Group (location)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputLocation"
                      >Location</label
                    >
                    <input
                      class="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Update your location"
                      :value="profile.location"
                      :readonly="isEditable"
                    />
                  </div>
                </div>
                <!-- Form Group (email address)-->
                <div class="form-group">
                  <label class="small mb-1" for="inputEmailAddress"
                    >Email address</label
                  >
                  <input
                    class="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    :value="user.email"
                    :readonly="isEditable"
                  />
                </div>
                <!-- Form Row-->
                <div class="form-row">
                  <!-- Form Group (phone number)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputPhone"
                      >Phone number</label
                    >
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Update your phone number"
                      :value="profile.phone"
                      :readonly="isEditable"
                    />
                  </div>
                  <!-- Form Group (birthday)-->
                  <div class="form-group col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Birthday</label
                    >
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Update your birthday"
                      :value="profile.dob"
                      :readonly="isEditable"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <router-link to="/profile/change-password" class="h6"
                    >Change my password</router-link
                  >
                </div>
                <!-- Save changes button-->
                <button
                  v-if="isEditable"
                  class="btn btn-primary"
                  type="button"
                  @click="handleEditProfile"
                >
                  Edit profile
                </button>
                <button
                  v-if="!isEditable"
                  class="btn btn-success"
                  type="button"
                  @click="handleChanges"
                >
                  Save changes
                </button>
                <button
                  v-if="!isEditable"
                  class="btn btn-danger ml-3"
                  type="button"
                  @click="handleCancel"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProfileMain",
  props: ["user"],
  data() {
    return {
      profile: {
        first_name,
      },
      isEditable: true,
    };
  },
  methods: {
    handleEditProfile() {
      this.isEditable = false;
    },
    handleCancel() {
      this.profile = this.user;
      this.isEditable = true;
    },
    async handleChange() {
      this.isEditable = true;
    },
  },
};
</script>
