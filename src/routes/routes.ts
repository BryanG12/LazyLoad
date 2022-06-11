import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyload/page/NoLazy';
// import { LazyLoad1 } from '../lazyload/page';



type JSXComponet = () => JSX.Element;



interface Route {
  to: string;
  path: string;
  Component: JSXComponet | LazyExoticComponent<() => JSX.Element>;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */  '../lazyload/layout/LazyLayout'));
// const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */  '../lazyload/page/LazyLoad2'));
// const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */  '../lazyload/page/LazyLoad3'));


export const routes: Route[] =[
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy Page No.1',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  }
];

