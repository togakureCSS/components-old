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
      <tog-button text="Default"></tog-button>&nbsp;
      <tog-button style="primary" text="Primary"></tog-button>&nbsp;
      <tog-button style="success" text="Success"></tog-button>&nbsp;
      <tog-button style="info" text="Info"></tog-button>&nbsp;
      <tog-button style="warning" text="Warning"></tog-button>&nbsp;
      <tog-button style="danger" text="Danger"></tog-button>&nbsp;
      <tog-button style="transparent" text="Text" size="none"></tog-button>&nbsp;
    </div>
    `,
}));
