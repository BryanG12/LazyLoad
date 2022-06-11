import { lazy, LazyExoticComponent } from 'react';
// import { LazyLoad1 } from '../lazyload/page';


type JSXComponet = () => JSX.Element;



interface Route {
  to: string;
  path: string;
  Component: JSXComponet | LazyExoticComponent<() => JSX.Element>;
  name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */  '../lazyload/page/LazyLoad1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */  '../lazyload/page/LazyLoad2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */  '../lazyload/page/LazyLoad3'));


export const routes: Route[] =[
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: lazy1,
    name: 'Lazy Page No.1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: lazy2,
    name: 'Lazy Page No.2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: lazy3,
    name: 'Lazy Page No.3',
  }
];

