import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.story.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
    require('./stories.scss');
}

configure(loadStories, module);

setOptions({
    showAddonPanel: true,
    name: 'playground',
    url: 'https://github.com/zabaala/playground',
    sidebarAnimations: false
});

