## vue3-realworld

使用 vue3 创建应用，主要用于学习 vue3 的一些技术和特性

## 项目结构

采用 monorepo 的方式管理项目

## 启动

克隆项目，安装依赖

```bash

pnpm i

```

切换到需要启动的项目[target]下

```bash 
cd packages/[target]

pnpm dev
```

## 技术链

框架: vue3 + typescript 

UI库: element-plus

路由: vue router 4

状态管理： pinia

请求库: axios



## 概述

```
packages |
            counter   计数器

            interval  定时器

            toggle    简易开关功能实现

            todo      待办清单

            todo-pina 通过 pinia 对 todo 进行部分重构

            todo-element 通过 element-plus 对 todo 进行部分重构

            github-user 通过公共 API，查找 github 用户的信息
```