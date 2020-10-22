import { Component } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-tooltip',
  template: '<div></div>',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/tooltip.css']
})

export default class TooltipComponent {
  public get classes(): string[] {
    return [styles.tooltip];
  }
};
