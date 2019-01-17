import React from 'react';
import PropTypes from 'prop-types';
import ActivityIndicator from '../ActivityIndicator';

const propTypes = {
    /**
     * One or many css classes.
     */
    src: PropTypes.string.isRequired,
    /**
     * With of image. Can be a number or a string.
     */
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    /**
     * Height of image. Can be a number or a string.
     */
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /**
     * Function that will be called when image fully loaded.
     */
    onLoad: PropTypes.func,
    /**
     * Function that will be called when a load image error occur.
     */
    onError: PropTypes.func,
};

const defaultProps = {
    onLoad: () => {},
    onError: () => {}
};

class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: null,
            error: false
        };

        this.handleOnLoaded = this.handleOnLoaded.bind(this);
        this.handleOnError= this.handleOnError.bind(this);
    }

    componentDidMount = () => {
        this.download(this.props.src);
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.src !== this.props.src) {
            this.download(this.props.src);
        }
    };

    handleOnLoaded = (e) => {
        this.props.onLoad(e);
    };

    handleOnError= (e) => {
        this.props.onError(e);
    };

    /**
     * @param src
     */
    download = (src) => {
        fetch(src)
        .then(response => {
            this.setState({
                src: null,
                error: false
            });

            if (! response.ok) {
                this.handleOnError();
                throw Error(response.statusText);
            }

            response.arrayBuffer().then((buffer) => {
                const base64Flag = 'data:image/jpeg;base64,';
                const imageStr = this.arrayBufferToBase64(buffer);

                this.setState({
                    src: base64Flag + imageStr
                });
            });
        })
        .catch(error => {
            this.setState({
                src: null,
                error: true
            });
        });
    };

    /**
     * @param buffer
     * @returns {string}
     */
    arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));

        bytes.forEach((b) => binary += String.fromCharCode(b));

        return window.btoa(binary);
    };

    render() {
        const {
            onLoad,
            onError,
            src,
            ...others
        } = this.props;

        if (this.state.src === null && this.state.error === false) {
            return <ActivityIndicator width={30} height={30} />
        }

        if (this.state.src !== null && this.state.error === false) {
            return <img {...others}
                src={this.state.src}
                onLoad={e => this.handleOnLoaded(e)}
            />;
        }

        // @todo: The user can define a component to be returned, if any error occur...
        // Maybe: create a Empty component.
        if (this.state.error === true) {
            return '';
        }
    }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;