<template>
  <div class="demo-box">
    <h1>hello {{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
