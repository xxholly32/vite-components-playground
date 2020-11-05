---
title: Hello-world
description: Hello-world component doc
tags:
  - "components"
---

# Hello-world

This is Hello-world component

## Install

```js
import ui from "@vitec/hello-world";

createApp(App).use(ui);
```

## Basic

```vue
<template>
  <hello-world :msg="msg"></hello-world>
</template>
<script>
export default {
  data() {
    return {
      msg: "world",
    };
  },
};
</script>
```
