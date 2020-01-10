import { storiesOf, moduleMetadata } from '@storybook/angular';

import { TagComponent } from './index';

const stories = storiesOf('Tag', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [TagComponent],
  })
)

stories.add('default', () => ({
  template: `
    <div>
      <ui-tag></ui-tag>
    </div>
    `,
}));
