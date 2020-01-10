import { storiesOf, moduleMetadata } from '@storybook/angular';

import { TooltipComponent } from './index';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [TooltipComponent],
  })
)

stories.add('default', () => ({
  template: `
    <div>
      <ui-tooltip></ui-tooltip>
    </div>
    `,
}));
