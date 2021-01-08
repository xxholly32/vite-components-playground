# vite-components-playground

This is a vue3 components playground use [vite](https://github.com/vitejs/vite).

> If you are using vue2 you can use litter bother [vue-general-components](https://xxholly32.github.io/vue-general-components/)

## Doc site

```bash
npm run dev
```

Use [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc) to change markdown to vue , [Tailwind](https://tailwindcss.com/) for site css framework.

> this framework is still not the best.

### Build site

```
npm run build
```

## Build components

```bash
npm run build:all
```

Use [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue) , [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild) build vue components.

## Core Concepts

### tailwindcss

I used [tailwindcss](https://tailwindcss.com/) on the project, and you can follow its component development scenario to develop the components。Its Utility-First principle can help us to normalize the style code. If you find three duplicates of the style you have written, you can extract the utility classes. see [utility classes](https://github.com/xxholly32/vite-components-playground/blob/master/packages/theme/src/utilities.css)

> more detail check doc [css-utility-classes-and-separation-of-concerns](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

Style writing specification:

- Utility-First
- Dark mode
- Responsive Design

More design specifications can be found at: <https://tailwindcss.com/>

TODO: write tailwindcss plugins with style, and the vscode plugin

### General Rules for components

Components have a certain degree of generality, in the design of components need to consider similar general rules and configuration to the global. For example, support default support different component size, support text text-direction, and so on.

> [ant-design config provider](https://ant.design/components/config-provider-cn/#API)

## TODO

- Product
  - [ ] vite2
  - [ ] github action
  - [ ] netlify
- [ ] add core concepts
- add test
- practice

more detail see my [blog](https://xxholly32.github.io/Blog/2020/vite-components-playground.html)

## License

MIT &copy; [xxholly32 (xiangxiao)](https://github.com/xxholly32)
