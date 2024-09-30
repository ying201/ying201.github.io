import { front_sidebar } from "./front/index";
import { computer_sidebar } from "./computer/index";
export const sidebar = {
  "/前端开发/前端基础": front_sidebar.base,
  "/前端开发/前端框架": front_sidebar.frame,
  "/前端开发/打包工具": front_sidebar.pack,
  "/前端开发/代码规范": front_sidebar.code,
  "/计算机基础/计算机网络": computer_sidebar.network,
  "/计算机基础/操作系统": computer_sidebar.os,
  "/计算机基础/组成原理": computer_sidebar.constitution,
  "/计算机基础/数据结构": computer_sidebar.structure,
  "/计算机基础/编译原理": computer_sidebar.compile,
};
