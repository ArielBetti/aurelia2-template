import { customElement } from '@aurelia/runtime-html';
import template from './home.html';
import { Card } from '../../components/card/card';
import "./home.css";

@customElement({
  name: 'home-page', template,
  dependencies: [
    Card,
  ],
})
export class Home {
  message = 'Its a variable message!';
}
