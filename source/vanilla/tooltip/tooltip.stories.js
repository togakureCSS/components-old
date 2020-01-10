import { storiesOf } from '@storybook/html';

const stories = storiesOf('Tooltip', module);

stories.add('default', () => `
    <tog-tooltip text="UX" content="User Experience" position="left"></tog-tooltip>
  `
);
