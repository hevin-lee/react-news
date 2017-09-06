/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import { Icon , InputItem } from 'antd-mobile'


require('./comment.less')
export default class Comment extends Component {
	render() {
		return (
			<div id="comment">
				<input className="editComment"   placeholder="写评论..." /> 
				<Icon type="android-share" color="#d43d3d" size="30" className="commentInco fr" ></Icon>
				<Icon type="ios-cloud-outline"   size="30" className="commentInco fr"></Icon>
				<Icon type="ios-cloud"   size="30" color="#d43d3d" className="commentInco fr"></Icon>
				<Icon type="ios-chatbubble-outline" size="30" className="commentInco fr showcomment">
				</Icon>
				<span className="commentNum">333</span>
			</div>
		)
	}
}