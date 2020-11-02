declare type Menu = {
  name: string;
  path?: string;
  children?: Array<Menu>;
};

// TODO: change to auto config
const menuConfig: Array<Menu> = [
  {
    name: "GET STARTED",
    children: [
      {
        name: "Introduction",
        path: "Intro",
      },
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
  .reduce((prev: Array<Menu>, current: Menu): Array<any> => {
    return [...prev, ...(current.children ? current.children : [])];
  }, [])
  .map((demo: Menu) => {
    const path: string | undefined  = demo.path;
    return {
      path: `${path?.toLowerCase()}`,
      name,
      component: () =>
        import(/* webpackChunkName: "group-foo" */ `../docs/${path}.md`),
      meta: {
        label: name,
      },
    };
  });
