import { Component, OnInit } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert-component.html',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/alert.css']
})

export class AlertComponent implements OnInit {
  classes: object;

  constructor() {
    this.classes = styles.alert;
  }

  ngOnInit() {}

  getStyle(style) {
    const styleName = this.classes[style] || this.classes['default'];
    return `${styleName}`;
  }
};
