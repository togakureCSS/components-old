import { Component } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-tag',
  template: '<div></div>',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/tag.css']
})

export default class TagComponent {
  public get classes(): string[] {
    return [styles.tag];
  }
};
