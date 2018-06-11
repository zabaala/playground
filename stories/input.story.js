import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, button } from '@storybook/addon-knobs';
import { inputSizes, inputTypes, inputStates } from '../src/Input/InputUtils';
import Input from '../src/Input/Input';

storiesOf('Input', module)

    .addDecorator(story => (<div className="m-5">{story()}</div>))
    .addDecorator(withKnobs)
    .add(
        'Standard',
        withInfo({
            inline: true,
            header: false,
            TableComponent
        })(() => {

            const disabled = boolean('Disabled', false);
            const placeholder = text('Placeholder', '');
            const feedbackText = text('Feedback Text', '');
            const onChangeText = text('onChange Text', 'Changed...');
            const size = select('Size', inputSizes, 'normal');
            const type = select('Type', inputTypes, 'text');
            const state = select('State', inputStates, 'normal');

            return (
                <Input
                    size={size}
                    type={type}
                    state={state}
                    disabled={disabled}
                    placeholder={placeholder}
                    feedbackText={feedbackText}
                    onChange={action(onChangeText)}
                />
            );
        })
    );
