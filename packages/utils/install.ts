// 所有 vue 插件的安装 

import type { App, Plugin, Directive } from "vue";
import { noop } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;


export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};
