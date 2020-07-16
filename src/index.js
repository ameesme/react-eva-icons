/**
 * @name react-eva-icons
 * @author Dimitris Raptis
 * @copyright Dimitris Raptis 2018
 * @license MIT
 */

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
		const { type, hover = false, infinite = false } = animation;
		const icon = (
			<i
				data-eva={name}
				data-eva-fill={fill}
				data-eva-height={size}
				data-eva-width={size}
				{...(type !== undefined ? {
					'data-eva-animation': type,
					'data-eva-hover': hover,
					'data-eva-infinite': infinite
				} : {})
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
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

Icon.defaultProps = {
	animation: {},
	fill: "#fff",
	name: "",
	size: "20",
};

export default Icon;