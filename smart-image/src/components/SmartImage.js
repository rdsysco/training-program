import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class SmartImage extends Component {

    // sizes, srcset
    static propTypes = {
        src: PropTypes.string,
        lazySrc: PropTypes.string,
        defaultSrc: PropTypes.string,
        alt: PropTypes.string,
        aspectRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        contain: PropTypes.bool,
        gradient: PropTypes.string,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        position: PropTypes.string,
        minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        transition: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        delay: PropTypes.number,
        grid: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
        intersection: PropTypes.bool,
        intersectionDelay: PropTypes.number,
    }

    static defaultProps = {
        src: undefined,
        lazySrc: undefined,
        defaultSrc: undefined,
        alt: undefined,
        aspectRatio: undefined,
        contain: false,
        gradient: undefined,
        height: undefined,
        width: undefined,
        position: 'center center',
        minHeight: undefined,
        maxHeight: undefined,
        minWidth: undefined,
        maxWidth: undefined,
        transition: 'fade-transition',
        delay: undefined,
        grid: undefined,
        intersection: true,
        intersectionDelay: undefined,
    }

    constructor(props) {

        super(props);

        this.element = React.createRef();

        this.observer = undefined;

        this.state = this.calculatedOptions();
    }

    calculatedGrid() {

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

    calculatedOptions() {

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
            grid: this.calculatedGrid(),
        };

        return result;
    }

    convertNumberToString(value) {

        let result = value;

        if ((typeof value === 'number') || (typeof value === 'string' && value && !isNaN(value))) {

            result = value + 'px';
        }

        return result;
    }

    init() {

        const { intersection } = this.state;

        if (intersection && this.intersectionIsAvailable()) {

            this.observer = new IntersectionObserver((entries) => {

                const entry = entries[0];

                const { isIntersecting } = entry;

                isIntersecting && this.load();
            });

            this.observer.observe(this.element.current);
        }
        else {

            this.load();
        }
    }

    intersectionIsAvailable() {

        return typeof window.IntersectionObserver !== undefined;
    }

    intersectionDisconnect() {

        this.observer && this.observer.disconnect && this.observer.disconnect();
    }

    load() {

        let { src, lazySrc, defaultSrc, delay } = this.state;

        const image = new Image();

        const now = Date.now();

        image.onload = () => {
            
            this.intersectionDisconnect();

            const source = src || defaultSrc;

            if (delay) {

                let duration = Date.now() - now;

                delay = delay > duration ? delay - duration : 0;

                setTimeout(() => {

                    this.setState({
                        calculatedSrc: source
                    });
                }, delay);
            }
            else {

                this.setState({
                    calculatedSrc: source
                });
            }
        };

        image.onerror = () => {

            this.intersectionDisconnect();

            const source = defaultSrc || src;

            if (delay) {

                let duration = Date.now() - now;

                delay = delay > duration ? delay - duration : 0;

                setTimeout(() => {

                    this.setState({
                        calculatedSrc: source
                    });
                }, delay);
            }
            else {

                this.setState({
                    calculatedSrc: source
                });
            }
        };

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

        const options = this.calculatedOptions();

        this.setState({
            ...options
        });
    }

    componentDidMount() {

        this.init();
    }

    __componentWillReceiveProps(...args) {

        this.updateOptions();

        this.load();

        console.log(9, this, ...args)
    }

    componentWillUnmount(){

        this.intersectionDisconnect();
    }

    render() {

        const { calculatedSrc, width, height } = this.state;

        return (
            <img ref={this.element} src={calculatedSrc} alt="aaa" width={width} height={height} />
        );
    }
}