/*
 * @Author: Hevin
 * @Date: 2017-07-19 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-19 15:51:09
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
 
export default class welcome extends Component {
	// 初始化常量 绑定事件方法
	constructor(props,context) {
		super(props);
		this.state = {
			data:{}
		}
	}
	// 组件已经加载到dom中
	componentDidMount() {

	}
	
	render() {
		return (
			<div className="welcome">
				<div className="content">
					<Button>Start</Button>
					<h2 className="title">Hello~React,welcome!</h2>
				</div>
			</div>
		)
	}
}