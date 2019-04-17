import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class SmartImage extends Component {

    // sizes, srcset
    static propTypes = {
        src: PropTypes.string,
        lazySrc: PropTypes.string,
        defaultSrc: PropTypes.string,
        alt: PropTypes.string,
        // aspectRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // contain: PropTypes.bool,
        // gradient: PropTypes.string,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // position: PropTypes.string,
        // minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // transition: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        delay: PropTypes.number,
        // grid: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
        intersection: PropTypes.bool,
        intersectionDelay: PropTypes.number,
    }

    static defaultProps = {
        src: undefined,
        lazySrc: undefined,
        defaultSrc: undefined,
        alt: undefined,
        // aspectRatio: undefined,
        // contain: false,
        // gradient: undefined,
        height: undefined,
        width: undefined,
        // position: 'center center',
        // minHeight: undefined,
        // maxHeight: undefined,
        // minWidth: undefined,
        // maxWidth: undefined,
        // transition: 'fade-transition',
        delay: undefined,
        // grid: undefined,
        intersection: true,
        intersectionDelay: undefined,
    }

    get grid() {

        const { grid } = this.props;

        if (!grid || (Array.isArray(grid) && !grid.length)) return;

        let result;

        const getGrid = (sections) => {

            let result;

            switch (sections.length) {

                case 1: {

                    result = [sections[0], sections[0]];

                    break;
                }

                case 2: {

                    result = [...sections];

                    break;
                }
            }

            return result;
        };

        switch (typeof grid) {

            case 'number': {

                result = [grid, grid];

                break;
            }

            case 'string': {

                const sections =
                    grid
                        .split(',')
                        .map((item) => parseInt(item))
                        .filter((item) => !isNaN(item));

                result = getGrid(sections);

                break;
            }

            case 'object': {

                const sections =
                    grid
                        .map((item) => parseInt(item))
                        .filter((item) => !isNaN(item));

                result = getGrid(sections);

                break;
            }
        }

        return result
    }

    get intersectionIsAvailable() {

        return typeof window.IntersectionObserver !== undefined;
    }

    get options() {

        const { aspectRatio, height, width, minHeight, maxHeight, minWidth, maxWidth } = this.props;

        const result = {
            ...this.props,
            aspectRatio: this.parseNumber(aspectRatio),
            height: this.convertNumberToString(height),
            width: this.convertNumberToString(width),
            minHeight: this.convertNumberToString(minHeight),
            maxHeight: this.convertNumberToString(maxHeight),
            minWidth: this.convertNumberToString(minWidth),
            maxWidth: this.convertNumberToString(maxWidth),
            grid: this.grid,
        };

        return result;
    }

    constructor(props) {

        super(props);

        this.element = React.createRef();

        this.observer = undefined;

        this.state = this.options;

        this.timeout = undefined;
    }

    convertNumberToString(value) {

        let result = value;

        if ((typeof value === 'number') || (typeof value === 'string' && value && !isNaN(value))) {

            result = value + 'px';
        }

        return result;
    }

    intersectionDisconnect() {

        this.observer && this.observer.disconnect && this.observer.disconnect();
    }

    load() {

        const { intersection, intersectionDelay } = this.state;

        if (intersection && this.intersectionIsAvailable) {

            this.observer = this.observer || new IntersectionObserver((entries) => {

                const entry = entries[0];

                const { isIntersecting } = entry;

                clearTimeout(this.timeout);

                if (isIntersecting) {

                    this.timeout = setTimeout(() => {

                        this.intersectionDisconnect();

                        this.loadImage();

                    }, intersectionDelay || 0);
                }
            });

            this.observer.observe(this.element.current);
        }
        else {

            this.loadImage();
        }
    }

    loadImage() {

        let { src, lazySrc, defaultSrc, calculatedSrc, delay } = this.state;

        if (src && src === calculatedSrc) return;

        const
            now = Date.now(),
            image = new Image(),
            done = (src) => {

                const duration = Date.now() - now;

                const remaining = delay > duration ? delay - duration : 0;

                setTimeout(() => {

                    this.setState({
                        calculatedSrc: src
                    });
                }, remaining);
            };

        image.onload = () => done(src || defaultSrc);

        image.onerror = () => done(defaultSrc || src);

        image.src = src || defaultSrc;

        this.setState({
            calculatedSrc: lazySrc
        });
    }

    parseNumber(value) {

        let result = undefined;

        if ((typeof value === 'number') || (typeof value === 'string' && value && !isNaN(value))) {

            result = parseFloat(value);
        }

        return result;
    }

    updateOptions() {

        const options = this.options;

        this.setState({
            ...options
        });
    }

    componentDidMount() {

        this.load();
    }

    componentWillReceiveProps() {

        // ???
        setTimeout(() => {

            this.updateOptions();

            this.loadImage();
        }, 0)
    }

    componentWillUnmount() {

        this.intersectionDisconnect();
    }

    render() {

        const { calculatedSrc, width, height, alt } = this.state;

        return (
            <img
                ref={this.element}
                src={calculatedSrc}
                alt={alt}
                width={width}
                height={height} />
        );
    }
}