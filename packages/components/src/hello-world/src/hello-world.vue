<template>
  <div>
    <h1>
      {{ $t("hello") }}
    </h1>
    <h2>
      {{ this.$t("hello") }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  beforeCreate() {
    console.log("beforeCreate", (window.__hw = this));
  },
  created() {
    console.log(this);
  },
};
</script>
