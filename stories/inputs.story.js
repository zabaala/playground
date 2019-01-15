import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// input stories...
import textFieldStory from './inputs/text.story';
import dateInputStory from './inputs/date.story';
import emailInputStory from './inputs/email.story';
import cpfInputStory from './inputs/cpf.story';
import TableComponent from "./Components/TableComponent";

const config = {
    inline: true,
    header: true,
    TableComponent
};

storiesOf('Inputs', module)
    .addDecorator(story => (<div className="m-6">{story()}</div>))
    .addDecorator(withKnobs)

    // Standard input...
    .add(
        textFieldStory.name,
        withInfo(config)(textFieldStory.content)
    )
    // Date input...
    .add(
        dateInputStory.name,
        withInfo(config)(dateInputStory.content)
    )
    // e-mail input...
    .add(
        emailInputStory.name,
        withInfo(config)(emailInputStory.content)
    )
    // Cpf input...
    .add(
        cpfInputStory.name,
        withInfo(config)(cpfInputStory.content)
    )
;


