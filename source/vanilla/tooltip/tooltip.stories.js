import { storiesOf } from '@storybook/html';

const stories = storiesOf('Tooltip', module);

stories.add('default', () => `
    <tog-tooltip text="UX" title="User Experience"></tog-tooltip>
  `
);
