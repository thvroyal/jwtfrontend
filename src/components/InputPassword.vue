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
      />
      <div class="position-absolute text-small" style="right: 5%">
        <a href="javascript:void(0)" v-on:click="handleToggle"
          ><i :class="status[toggle][1]" aria-hidden="true"></i
        ></a>
      </div>
    </div>
    <span class="small text-danger pl-2 position-absolute" style="top: 110%">{{
      isCaplockOn ? "CapsLock is on" : ""
    }}</span>
  </div>
</template>
<script>
export default {
  name: "InputPassword",
  data() {
    return {
      status: [
        ["password", "fa fa-eye-slash"],
        ["text", "fa fa-eye"],
      ],
      toggle: 0,
      isCaplockOn: false,
    };
  },
  props: ["value"],
  methods: {
    handleToggle() {
      this.toggle = 1 - this.toggle;
    },
    keymonitor: function (e) {
      this.isCaplockOn = e.getModifierState("CapsLock");
    },
  },
};
</script>
