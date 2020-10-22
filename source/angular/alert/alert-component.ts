import { Component } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-alert',
  template: '<div></div>',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/alert.css']
})

export default class AlertComponent {
  public get classes(): string[] {
    return [styles.alert];
  }
};
