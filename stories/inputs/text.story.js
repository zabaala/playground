import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import
    Input, {
    types as textInputTypes,
    sizes as textInputSizes,
    states as textInputStates
} from '../../src/Input';


const textFieldStory = {
    name: 'Basic Input',
    config: null,
    content: function() {
        const disabled = boolean('Disabled', false);
        const required = boolean('Required', false);
        const waiting = boolean('Waiting', false);
        const isValid = boolean('Valid', true);
        const ok = boolean('Ok', true);
        const placeholder = text('Placeholder', 'Type your full name here...');
        const feedbackText = text('Feedback Text', 'Invalid value.');
        const onChangeText = text('onChange Text', 'Changed...');
        const size = select('Size', textInputSizes, 'md');
        const type = select('Type', textInputTypes, 'text');
        const state = select('State', textInputStates, 'normal');

        return (
            <div>
                <p>Try it:</p>

                <Input
                    name="input_name"
                    type={type}
                    size={size}
                    state={state}
                    ok={ok}
                    waiting={waiting}
                    required={required}
                    disabled={disabled}
                    placeholder={placeholder}
                    feedbackText={feedbackText}
                    onChange={action(onChangeText)}
                    isValid={isValid}
                />
            </div>
        );
    }
};

export default textFieldStory;