import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AlertComponent } from './index';

const stories = storiesOf('Alert', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [AlertComponent],
  })
)

stories.add('default', () => ({
  template: `
    <div>
      <tog-alert></tog-alert>
    </div>
    `,
}));
