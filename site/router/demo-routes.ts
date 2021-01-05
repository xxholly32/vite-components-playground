import { ComponentOptions } from "vue";

import introDoc from "../../README.md";
import buttonDoc from "../../packages/ui/button/README.md";
import themeDoc from "../../packages/theme/README.md";
import utilsDoc from "../../packages/utils/README.md";

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
        name: "introduction",
        filePath: introDoc,
        path: "intro",
      },
      {
        name: "Theme",
        filePath: themeDoc,
        path: "theme",
      },
      {
        name: "utils",
        filePath: utilsDoc,
        path: "utils",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "button",
        filePath: buttonDoc,
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
