/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
 

export default class App extends Component {
	render(){
		return(
			<section>{this.props.children}</section>
		)
	}
}