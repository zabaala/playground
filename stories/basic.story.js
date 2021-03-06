import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './Components/TableComponent';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import StoryBody from './Components/StoryBody';

import ActivityIndicator from '../src/Components/ActivityIndicator';
import Align, { alignments as alignmentsOfAlign } from '../src/Components/Align';
import AvatarList from '../src/Components/AvatarList';
import Avatar, {colors as colorsOfAvatar, sizes as sizesOfAvatar, statusList as statusOfAvatar} from '../src/Components/Avatar';

import Alert from '../src/Components/Alert';
import { types as alertTypes } from "../src/Components/Alert";

import Card from '../src/Components/Card';
import Container from '../src/Components/Container';
import Row from '../src/Components/Row';
import Col, { colWidths } from '../src/Components/Col';
import Color, { colors as colorsOfColor } from '../src/Components/Color';
import Icon from '../src/Components/Icon';
import Image from '../src/Components/Image';
import Link, { targetList } from '../src/Components/Link';
import Nav, { alignments as alignmentsOfNav } from '../src/Components/Nav';
import NavItem, { targetList as targetListOfNavItem } from '../src/Components/NavItem';
import Separator from '../src/Components/Separator';
import Size, {sizes as sizesOfSize } from '../src/Components/Size';
import Text from '../src/Components/Text';
import Title, {sizes as titleSizes} from '../src/Components/Title';

storiesOf('Basic', module)

    .addDecorator(story => (<div className="m-6">{story()}</div>))
    .addDecorator(withKnobs)
    .add(
        'ActivityIndicator',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            return (
                <StoryBody>
                    <ActivityIndicator width={30} height={30} />
                    <ActivityIndicator width={60} height={60} />
                    <ActivityIndicator width={100} height={100} />
                    <ActivityIndicator width={150} height={150} />
                    <ActivityIndicator width={200} height={200} />
                </StoryBody>
            );
        })
    )
    .add(
        'Align',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const alignments = select('Align', alignmentsOfAlign, 'left');
            return (
                <StoryBody>
                    <Align align={alignments}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis deleniti dolor eaque ex facilis numquam rem, repellat sint voluptates!
                            A corporis dolores, eos ex ipsum magnam omnis quaerat quam voluptates!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis deleniti dolor eaque ex facilis numquam rem, repellat sint voluptates!
                            A corporis dolores, eos ex ipsum magnam omnis quaerat quam voluptates!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis deleniti dolor eaque ex facilis numquam rem, repellat sint voluptates!
                            A corporis dolores, eos ex ipsum magnam omnis quaerat quam voluptates!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis deleniti dolor eaque ex facilis numquam rem, repellat sint voluptates!
                            A corporis dolores, eos ex ipsum magnam omnis quaerat quam voluptates!
                        </Text>
                    </Align>
                </StoryBody>
            );
        })
    )
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
        'Avatar',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const initials = boolean('Initials', true);
            const imageAvatar = boolean('With Image', false);
            const color = select('Color', ['', ...colorsOfAvatar], 'green');
            const size = select('Size', sizesOfAvatar, 'xxl');
            const status = select('Status', statusOfAvatar, 'green');
            const avatarSrc = text('Src', 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-9/33204808_10209559206337566_1074408325614927872_n.jpg?_nc_cat=105&_nc_ht=scontent.ffor11-1.fna&oh=784d2b3b09c65ef8ec37e313d6593385&oe=5CB7B393');
            return (
                <StoryBody>
                    <Avatar
                        size={size}
                        color={color}
                        status={status}
                        src={imageAvatar && avatarSrc}>
                        {initials ? 'MR' : <Icon name="heart" /> }
                    </Avatar>
                </StoryBody>
            );
        })
    )
    .add(
        'AvatarList',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const stacked = boolean('Stacked', false);
            const avatarSizes = select('Size', sizesOfAvatar, 'lg');
            return (
                <StoryBody>
                    <AvatarList stacked={stacked} className="d-block mb-4">
                        <Avatar size={avatarSizes} color="blue">AB</Avatar>
                        <Avatar size={avatarSizes} color="azure">CD</Avatar>
                        <Avatar size={avatarSizes} color="indigo">EF</Avatar>
                        <Avatar size={avatarSizes} color="purple">GH</Avatar>
                        <Avatar size={avatarSizes} color="pink">IJ</Avatar>
                        <Avatar size={avatarSizes} color="cyan">LM</Avatar>
                        <Avatar size={avatarSizes}>+8</Avatar>
                    </AvatarList>

                    <AvatarList stacked={stacked} className="d-block mb-4">
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/12.jpg">AB</Avatar>
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/21.jpg">CD</Avatar>
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/22.jpg">EF</Avatar>
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/23.jpg">GH</Avatar>
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/24.jpg">IJ</Avatar>
                        <Avatar size={avatarSizes} src="https://tabler.github.io/tabler/demo/faces/female/25.jpg">LM</Avatar>
                        <Avatar size={avatarSizes}>+8</Avatar>
                    </AvatarList>
                </StoryBody>
            );
        })
    )
    .add(
        'Card',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            return (
                <StoryBody>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>Card Title</Card.Header.Title>
                            <Card.Header.Options>
                                <Link><Icon name="edit"/></Link>
                                <Link><Icon name="trash"/></Link>
                            </Card.Header.Options>
                        </Card.Header>
                        <Card.Body>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam commodi cupiditate dolorum eligendi fugit in incidunt
                                modi necessitatibus optio possimus provident ratione recusandae
                                repellat saepe tempora, temporibus veniam. Itaque, tempore.
                            </Text>
                        </Card.Body>
                        <Card.Body>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam commodi cupiditate dolorum eligendi fugit in incidunt
                                modi necessitatibus optio possimus provident ratione recusandae
                                repellat saepe tempora, temporibus veniam. Itaque, tempore.
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            a footer content here...
                        </Card.Footer>
                    </Card>
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
            const imageSrc = text('Src', 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-9/33204808_10209559206337566_1074408325614927872_n.jpg?_nc_cat=105&_nc_ht=scontent.ffor11-1.fna&oh=784d2b3b09c65ef8ec37e313d6593385&oe=5CB7B393');

            const onLoad = () => {
                console.log('Yeah, loaded!');
            };

            const onError = () => {
                console.error('Ops... something is wrong!');
            };

            return (
                <StoryBody>
                    <Image
                        width={150}
                        height={150}
                        src={imageSrc}
                        onLoad={onLoad}
                        onError={onError}
                    />
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
        'Nav',
        withInfo({
            inline: true,
            header: true,
            TableComponent
        })(() => {
            const navActiveItem = boolean('Simulate active', false);
            const navAlignment = select('Nav Align', alignmentsOfNav, 'left');
            const navItemHref = text('Link', 'https://github.com/zabaala/playground');
            const navItemTarget = select('Target', targetListOfNavItem, '_blank');

            return (
                <StoryBody>
                    <Nav align={navAlignment}>
                        <NavItem href={navItemHref} icon="home" active={navActiveItem}>Dashboard</NavItem>
                        <NavItem href={navItemHref} target={navItemTarget} icon="package">Plans</NavItem>
                        <NavItem href={navItemHref} target={navItemTarget} icon="tag">Coupons</NavItem>
                        <NavItem href={navItemHref} target={navItemTarget} icon="award">Subscriptions</NavItem>
                        <NavItem href={navItemHref} target={navItemTarget} icon="pie-chart">Report</NavItem>
                        <NavItem href={navItemHref} target={navItemTarget} icon="settings">Settings</NavItem>
                    </Nav>
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
