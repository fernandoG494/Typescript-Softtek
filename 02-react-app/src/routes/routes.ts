import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "Lazypage1" */ "../01-lazyLoad/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "Lazypage2" */ "../01-lazyLoad/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "Lazypage3" */ "../01-lazyLoad/pages/LazyPage3")
);

export const routes = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];
