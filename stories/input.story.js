import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
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
                <div>
                    <h1 className="display-4">Input > Standard</h1>
                    <hr className="m-0 mb-5 separator"/>
                    <p>Try it:</p>
                    <Input
                        size={size}
                        type={type}
                        state={state}
                        disabled={disabled}
                        placeholder={placeholder}
                        feedbackText={feedbackText}
                        onChange={action(onChangeText)}
                    />
                </div>
            );
        })
    );