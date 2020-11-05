<template>
  <div class="demo-box">
    <h1>hello {{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>packages/HelloWorld/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
});
</script>
<style scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
