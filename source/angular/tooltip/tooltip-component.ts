import { Component, OnInit } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'ui-tooltip',
  templateUrl: './tooltip-component.html',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/tooltip.css']
})

export class TooltipComponent implements OnInit {
  classes: object;

  constructor() {
    this.classes = styles.tooltip;
  }

  ngOnInit() {}

  getStyle(style) {
    const styleName = this.classes[style] || this.classes['default'];
    return `${styleName}`;
  }
};
