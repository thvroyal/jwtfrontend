<template>
  <div class="position-relative">
    <div class="form-group d-flex align-items-center position-relative">
      <input
        v-bind:type="status[toggle][0]"
        class="form-control form-control-user"
        id="exampleInputPassword"
        placeholder="Password"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        v-on:keyup="keymonitor"
        v-on:keydown="validatePassword"
      />
      <div class="position-absolute text-small" style="right: 5%">
        <a href="javascript:void(0)" v-on:click="handleToggle"
          ><i :class="status[toggle][1]" aria-hidden="true"></i
        ></a>
      </div>
    </div>
    <span
      v-if="checkCapslock"
      class="small text-danger pl-2 position-absolute"
      style="top: 110%"
      >{{ isCaplockOn ? "CapsLock is on" : "" }}</span
    >
    <div
      v-if="!isStrongPassword && validate"
      class="alert alert-light text-danger border position-absolute p-0 pt-2 pr-3"
      role="alert"
      style="top: 108%"
    >
      <ul class="small">
        <li>The password length must be greater than or equal to 8</li>
        <li>The password must contain one or more uppercase characters</li>
        <li>The password must contain one or more lowercase characters</li>
        <li>The password must contain one or more numeric values</li>
        <li>The password must contain one or more special characters</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputPassword",
  props: {
    checkCapslock: {
      type: Boolean,
      default: false,
    },
    value: String,
    validate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      status: [
        ["password", "fa fa-eye-slash"],
        ["text", "fa fa-eye"],
      ],
      toggle: 0,
      isCaplockOn: false,
      isStrongPassword: true,
    };
  },
  methods: {
    handleToggle() {
      this.toggle = 1 - this.toggle;
    },
    validatePassword() {
      const regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      this.isStrongPassword = regex.test(this.value);
    },
    keymonitor: function (e) {
      this.isCaplockOn = e.getModifierState("CapsLock");
    },
  },
};
</script>
