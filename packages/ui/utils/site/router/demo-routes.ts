import { ComponentOptions } from "vue";

import Intro from "../docs/Intro.md";
import HelloWorld from "../../packages/HelloWorld/README.md";

declare type Menu = {
  name: string;
  filePath: ComponentOptions;
  path: string;
};
declare type SubMenu = {
  name: string;
  children: Array<Menu>;
};

const menuConfig: Array<SubMenu> = [
  {
    name: "GET STARTED",
    children: [
      {
        name: "Introduction",
        filePath: Intro,
        path: "Intro",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "hello-world",
        filePath: HelloWorld,
        path: "helloworld",
      },
    ],
  },
];

export { menuConfig };

export default menuConfig
  .reduce((prev: Array<Menu>, current: SubMenu): Array<Menu> => {
    return [...prev, ...current.children];
  }, [])
  .map((demo: Menu) => {
    const path: string = demo.path;
    return {
      path: `${path?.toLowerCase()}`,
      name,
      component: demo.filePath,
    };
  });
