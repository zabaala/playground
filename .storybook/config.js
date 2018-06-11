import { configure } from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
    require('./playground.scss');
}

configure(loadStories, module);

setOptions({
    showAddonPanel: true,
    name: 'playground',
    url: 'https://github.com/zabaala/playground',
    sidebarAnimations: false
});

