---
title: Button
description: Button component doc
tags:
  - "components"
---

# Button

This is Button component

## Install

```js
# use npm
import ui from "@vitec/button";

createApp(App).use(ui);
```

## Basic

```vue demo
<template>
  <vc-button>default</vc-button>
  <vc-button type="primary">primary</vc-button>
  <vc-button type="success">success</vc-button>
  <vc-button type="info">info</vc-button>
  <vc-button type="warning">warning</vc-button>
  <vc-button type="danger">danger</vc-button>
</template>
```

## Different Size

```vue demo
<template>
  <vc-button type="success">default</vc-button>
  <vc-button type="success" size="small">small</vc-button>
  <vc-button type="success" size="large">large</vc-button>
</template>
```
