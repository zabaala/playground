import React from 'react';
import PropTypes from 'prop-types';
import ActivityIndicator from './ActivityIndicator';

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
    onLoaded: PropTypes.func,
    /**
     * Function that will be called when image is not loaded.
     */
    onUnloaded: PropTypes.func,
};

const defaultProps = {
    onLoaded: () => {},
    onUnloaded: () => {}
};

class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: null,
            error: false
        };

        // this.handleOnloaded = this.handleOnloaded.bind(this);
        // this.handleOnunloaded = this.handleOnunloaded.bind(this);
    }

    componentDidMount = () => {
        this.download(this.props.src);
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.src !== this.props.src) {
            this.download(this.props.src);
        }
    };

    handleOnloaded = (e) => {
        this.props.onLoaded(e);
    };

    handleOnunloaded = (e) => {
        this.props.onUnloaded(e);
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
        .then(() => this.handleOnloaded())
        .catch(error => {
            this.setState({
                src: null,
                error: true
            });
            this.handleOnunloaded();
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
        if (this.state.src === null && this.state.error === false) {
            return <ActivityIndicator width={30} height={30} />
        }

        const {onLoaded, onUnloaded, ...others} = this.props;

        if (this.state.src !== null && this.state.error === false) {
            return <img {...others} />;
        }

        if (this.state.error === true) {
            return '';
        }
    }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;