import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// input stories...
import textFieldStory from './inputs/text.story';
import TableComponent from "./Components/TableComponent";

const config = {
    inline: true,
    header: true,
    TableComponent
};

storiesOf('Inputs', module)
    .addDecorator(story => (<div className="m-6">{story()}</div>))
    .addDecorator(withKnobs)

    // textField
    .add(
        textFieldStory.name,
        withInfo(config)(textFieldStory.content)
    );
