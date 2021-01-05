<template>
  <button class="btn" :class="['btn-' + buttonSize, type ? 'btn-' + type : '']">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
// import { useGlobalConfig } from "../../../utils/lib/config";
// import { useGlobalConfig } from "@vitec/utils/config";

interface IButtonProps {
  type: string;
  size: string;
}
export default defineComponent({
  props: {
    type: String,
    size: String,
  },
  setup(props, ctx) {
    // const $vitec = useGlobalConfig();

    const buttonSize = computed(() => {
      // return props.size || $vitec.componentSize || "default";
      return props.size || "default";
    });

    return {
      buttonSize,
    };
  },
});
</script>
