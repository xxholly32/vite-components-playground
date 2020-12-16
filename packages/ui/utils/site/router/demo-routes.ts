import { ComponentOptions } from "vue";

import Intro from "../../README.md";
import Button from "../../packages/ui/Button/README.md";

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
        name: "button",
        filePath: Button,
        path: "button",
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
