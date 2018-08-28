import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import StoryBody from './Components/StoryBody';

import Alert from '../src/Alert';
import { types as alertTypes } from "../src/Alert";

import Container from '../src/Container';
import Row from '../src/Row';
import Col from '../src/Col';
import { colWidths } from "../src/Col"

import Color from '../src/Color';
import { colors as colorsOfColor } from "../src/Color"

import Icon from '../src/Icon';
import Image from '../src/Image';

import Link from '../src/Link';
import { targetList } from "../src/Link"

import Separator from '../src/Separator';
import Size from '../src/Size';
import {sizes as sizesOfSize } from "../src/Size"

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
        'Color',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {

            const color = select('Color', colorsOfColor, 'dark');

            return (
                <StoryBody>
                    <Color color={color}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at beatae blanditiis commodi
                            dolorum facere harum itaque, labore laboriosam nobis obcaecati velit! Adipisci, dolore
                            dolorum laudantium nisi quo repellendus soluta?
                        </Text>
                    </Color>
                </StoryBody>
            );
        })
    )
    .add(
        'Layout',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {

            const containerFluid = boolean('Container fluid', false);
            const rowNoGutters = boolean('Row no-gutters', false);

            return (
                <StoryBody>
                    <Container fluid={containerFluid}>
                        <Row className="mb-2" noGutters={rowNoGutters}>
                            <Col md={{size: 4, order: 2, offset: 2}} className="bg-blue-light border p-4 ">
                                <Color color="white">col-md-4 order-md-2 offset-md-2</Color>
                            </Col>
                            <Col md={{size: 6, order: 1}} className="bg-blue-light border p-4">
                                <Color color="white">col-md-6 order-md-1</Color>
                            </Col>
                        </Row>

                        <Row className="mb-2" noGutters={rowNoGutters}>
                            <Col lg="3" md="3" sm="6" xs="6" className="bg-blue-light border p-4">
                                <Color color="white">col 1</Color>
                            </Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="bg-blue-light border p-4">
                                <Color color="white">col 2</Color>
                            </Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="bg-blue-light border p-4">
                                <Color color="white">col 3</Color>
                            </Col>
                            <Col lg="3" md="3" sm="6" xs="6" className="bg-blue-light border p-4">
                                <Color color="white">col 4</Color>
                            </Col>
                        </Row>

                        <Row className="mb-2" noGutters={rowNoGutters}>
                            <Col sm={{size: 'auto', offset: 2}} className="bg-blue-light border p-4">
                                <Color color="white">col-sm offset-sm-2</Color>
                            </Col>
                            <Col sm={{size: 'auto', offset: 2}} className="bg-blue-light border p-4">
                                <Color color="white">col-sm offset-sm-2</Color>
                            </Col>
                        </Row>
                    </Container>
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
                    <Size size="72">
                        <Icon name={name} />
                    </Size>
                </StoryBody>
            );
        })
    )
    .add(
        'Image',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const imageSrc = text('Src', 'https://scontent.ffor10-1.fna.fbcdn.net/v/t1.0-1/p160x160/33204808_10209559206337566_1074408325614927872_n.jpg?_nc_cat=0&oh=8789984bad8adc7a0031a6cec3275ff3&oe=5C3B29CC');

            const onLoad = () => {
                console.log('Yeah, loaded!');
            };

            const onError = () => {
                console.error('Ops... something is wrong!');
            };

            return (
                <StoryBody>
                    <Image
                        src={imageSrc}
                        onLoad={onLoad}
                        onError={onError}
                    />
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

            const size = select('Size', sizesOfSize, '14');

            return (
                <StoryBody>
                    <Size size={size}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eaque eius fugit
                            impedit in, itaque laborum molestiae nostrum praesentium quibusdam reiciendis temporibus
                            tenetur! Cumque ex quae quos repudiandae veritatis?
                        </Text>
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
