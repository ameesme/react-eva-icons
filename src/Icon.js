import React, { Component } from "react";
import PropTypes from "prop-types";

import * as eva from "eva-icons";

class Icon extends Component {
  componentDidMount() {
    this.setupEvaIcons();
  }

  componentDidUpdate() {
    this.setupEvaIcons();
  }

  setupEvaIcons() {
    const { fill, animation, size } = this.props;

    const config = {
      fill,
      width: size,
      height: size,
      animation,
    };

    eva.replace(config);
  }

  render() {
    const { name, fill, size, animation } = this.props;
    const icon = (
      <i
        data-eva={name}
        data-eva-fill={fill}
        data-eva-height={size}
		data-eva-width={size}
		{...(animation.type !== undefined ? {
			'data-eva-animation': animation.type,
			'data-eva-hover': animation.hover,
			'data-eva-infinite': animation.infinite
		}:
		{})
		}
      />
    );

    return icon;
  }
}

Icon.propTypes = {
  animation: PropTypes.object,
  fill: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  animation: {},
  fill: "#fff",
  name: "",
  size: "20",
};

export default Icon;
