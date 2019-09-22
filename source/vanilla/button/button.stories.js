import { storiesOf } from '@storybook/html';

const stories = storiesOf('Button', module);

stories.add('default', () => `
    <tog-button text="Primary" styleType="primary" size="medium"></tog-button>
  `
);
