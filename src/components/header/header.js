import { customElement } from "@aurelia/runtime-html";
import template from "./header.html";
import "./header.css";
import { Logo } from "../logo/logo";

@customElement({
  name: "header-component",
  template,
  dependencies: [
    Logo
  ],
})
export class Header {

}