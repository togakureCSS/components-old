import { Component, OnInit } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'ui-breadcrumb',
  templateUrl: './breadcrumb-component.html',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/breadcrumb.css']
})

export class BreadcrumbComponent implements OnInit {
  classes: object;

  constructor() {
    this.classes = styles.breadcrumb;
  }

  ngOnInit() {}

  getStyle(style) {
    const styleName = this.classes[style] || this.classes['default'];
    return `${styleName}`;
  }
};
