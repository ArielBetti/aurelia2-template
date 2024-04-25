import { customElement } from '@aurelia/runtime-html';
import template from './about.html';

@customElement({ name: 'about-page', template })
export class About {
  message = 'Its a variable message!';
}
