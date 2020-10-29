// TODO: change to auto config
const menuConfig = [
  {
    name: "GET STARTED",
    children: [
      {
        name: "Introduction",
        path: "Intro",
      }
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "hello-world",
        path: "../../packages/HelloWorld/README",
      },
    ],
  },
];

export { menuConfig };

export default menuConfig
  .reduce((prev, current) => {
    return [...prev, ...(current.children ? current.children : [])];
  }, [])
  .map((demo) => {
    const { name, path } = demo;
    return {
      path: `${path.toLowerCase()}`,
      name,
      component: () =>
        import(/* webpackChunkName: "group-foo" */ `../docs/${path}.md`),
      meta: {
        label: name,
      },
    };
  });
