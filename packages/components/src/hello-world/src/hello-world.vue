<template>
  <h1>
    {{ $t("hello") }}
  </h1>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    console.log(this);
  },
};
</script>
