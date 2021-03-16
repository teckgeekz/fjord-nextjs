import React from 'react';
import _ from 'lodash';

import { classNames, withPrefix } from '../utils';

export default class HeaderImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleImageLoad = this.handleImageLoad.bind(this);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        const img = this.imageRef.current;
        setTimeout(() => {
            if (img && img.complete) {
                this.handleImageLoad();
            }
        }, 0);
    }

    handleImageLoad() {
        if (!this.state.loaded) {
            this.setState({ loaded: true });
        }
    }

    render() {
        const image = _.get(this.props, 'image');
        return (
            <div className="site-header-bg">
                <img
                    ref={this.imageRef}
                    src={withPrefix(image)}
                    onLoad={this.handleImageLoad}
                    className={classNames('site-header-bg-img', {
                        'loaded': this.state.loaded
                    })}
                    alt=""
                />
                <div className="site-header-bg-gradient" />
            </div>
        );
    }
}
