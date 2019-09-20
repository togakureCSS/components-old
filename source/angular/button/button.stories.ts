import { storiesOf, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [ButtonComponent],
  })
)

stories.add('default', () => ({
  template: `
    <div>
      <ui-button text="Default"></ui-button>&nbsp;
      <ui-button style="primary" text="Primary"></ui-button>&nbsp;
      <ui-button style="success" text="Success"></ui-button>&nbsp;
      <ui-button style="info" text="Info"></ui-button>&nbsp;
      <ui-button style="warning" text="Warning"></ui-button>&nbsp;
      <ui-button style="danger" text="Danger"></ui-button>&nbsp;
      <ui-button style="transparent" text="Text" size="none"></ui-button>&nbsp;
    </div>
    `,
}));
