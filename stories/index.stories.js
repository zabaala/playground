import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, button } from '@storybook/addon-knobs';
import InputSize from '../resources/React/Components/Input/InputSize';
import Input from '../resources/React/Components/Input/Input';

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
            const invalid = boolean('Invalid', false);
            const success = boolean('Success', false);
            const error = boolean('Error', false);
            const placeholder = text('Placeholder', '');
            const size = select('Size', InputSize.size, 'natural');
            const onChange = button('onChange', () => console.log('changed'));
            const types = {
                txt: 'txt',
                number: 'number',
                email: 'email',
                password: 'password',
            };

            const type = select('Type', types, 'txt');

            return (
                <Input
                    size={size}
                    type={type}
                    disabled={disabled}
                    invalid={invalid}
                    success={success}
                    error={error}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            );
        })
    );
