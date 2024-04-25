import { customElement } from '@aurelia/runtime-html';
import { bindable } from 'aurelia';
import template from './card.html';
import './card.css';

@customElement({ name: 'card-component', template })
export class Card {
  @bindable title = '';
  @bindable description  = '';
  @bindable imgUrl = ''
}
