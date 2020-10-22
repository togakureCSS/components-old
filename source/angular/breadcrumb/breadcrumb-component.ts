import { Component } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-breadcrumb',
  template: '<div></div>',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/breadcrumb.css']
})

export default class BreadcrumbComponent {
  public get classes(): string[] {
    return [styles.breadcrumb];
  }
};
