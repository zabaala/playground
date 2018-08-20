import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import StoryBody from './Components/StoryBody';

import Alert from '../src/Alert';
import { types as alertTypes } from "../src/Alert";

import Icon from '../src/Icon';

import Link from '../src/Link';
import { targetList } from "../src/Link"

import Separator from '../src/Separator';
import Size from '../src/Size';
import {sizes as sizesSizes } from "../src/Size"

import Text from '../src/Text';
import {sizes as titleSizes} from '../src/Title';
import Title from '../src/Title';

storiesOf('Basic', module)

    .addDecorator(story => (<div className="m-6">{story()}</div>))
    .addDecorator(withKnobs)
    .add(
        'Alert',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const dismissible = boolean('Dismissible', true);
            const type = select('Type', alertTypes, 'info');
            const _text = text('Text', '');

            return (
                <StoryBody>
                    <Alert dismissible={dismissible} type={type}>
                        {_text || [
                            <Text key={1}>This is a alert text with </Text>,
                            <Link key={2} href="http://www.google.com" target="_blank">support to linked</Link>,
                            <Text key={3}> text...</Text>
                        ]}
                    </Alert>
                </StoryBody>
            );
        })
    )
    .add(
        'Icon',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const name = text('Name', 'heart');

            return (
                <StoryBody>
                    <Icon name={name} />
                </StoryBody>
            );
        })
    )
    .add(
        'Link',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const href = text('href', 'https://www.google.com');
            const target = select('Target', targetList, '_parent');
            const _text = text('Text', 'a text link');

            return (
                <StoryBody>
                    <Link href={href} target={target}>{_text}</Link>
                </StoryBody>
            );
        })
    )
    .add(
        'Separator',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {

            const className = text('Class name', 'm-0');

            return (
                <StoryBody>
                    <Separator className={className}/>
                </StoryBody>
            );
        })
    )
    .add(
        'Size',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {

            const size = select('Size', sizesSizes, '72');

            return (
                <StoryBody>
                    <Size size={size}>
                        <Icon name="heart" />
                    </Size>
                </StoryBody>
            );
        })
    )
    .add(
        'Text',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {

            const __lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Accusantium, ad autem beatae consectetur cum cumque dignissimos explicabo id 
            libero minima obcaecati quibusdam repellendus, 
            sit veniam voluptates. Architecto fuga molestias nesciunt?`;

            const _text = text('Text', __lorem);

            return (
                <StoryBody>
                    <Text>{_text}</Text>
                </StoryBody>
            );
        })
    )
    .add(
        'Title',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const _text = text('Text', 'A title text here...');
            const size = select('Size', titleSizes, '1');

            return (
                <StoryBody>
                    <Title size={size}>{_text}</Title>
                </StoryBody>
            );
        })
    )
    ;
