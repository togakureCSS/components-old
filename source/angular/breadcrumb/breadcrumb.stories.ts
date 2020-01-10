import { storiesOf, moduleMetadata } from '@storybook/angular';

import { BreadcrumbComponent } from './index';

const stories = storiesOf('Breadcrumb', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [BreadcrumbComponent],
  })
)

stories.add('default', () => ({
  template: `
    <div>
      <tog-breadcrumb></tog-breadcrumb>
    </div>
    `,
}));
