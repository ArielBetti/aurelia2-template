import { customElement } from '@aurelia/runtime-html';
import { route } from '@aurelia/router-lite';
import template from './my-app.html';
import * as Component from "./components";
import * as Page from "./pages"; 
import '@unocss/reset/tailwind.css'
import "./my-app.css";

@route({
  routes: [
    {
      path: ['', 'home'],
      component: Page.Home,
      title: 'Home',
    },
    {
      path: 'about',
      component: Page.About,
      title: 'About',
    },
  ],
})
@customElement({
  name: 'my-app', template, dependencies: [
    Component.Header,
  ]
})
export class MyApp { }