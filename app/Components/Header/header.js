/*
 * @Author: Hevin
 * @首页header
 */

import React, {Component, PropTypes} from 'react'

import { Icon } from 'antd-mobile'

require('./header.less')
export default class Header extends Component {
	 
	render() {
		return (
			<header> 
			 	{this.props.children}
			</header>
		)
	}
}

