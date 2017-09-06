/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'

import Header from 'Components/Header/header'
import Comment from 'Components/Comment/comment'


require('./detail.less')
export default class Detail extends Component {
	render() {
		return (
			<div id="detail">
			<div className="container">
				<h2 className="detail-title">猖狂！这些大老虎的子女太太均曾吃空饷</h2>
				<div className="media_name">
					<img src="/dist/head.jpg?24856163f93fa7305a9400320bf28409" height="360" width="360" alt="" className="avatar_url" />
					<span className="name">观海解局</span>
					<br/>
					<span className="date">2017-08-21 09:39</span>
				</div>
				<div className="contentNews">
					法制晚报·看法新闻（记者 李洪鹏 编辑 岳三猛）最近，武汉海事局一公务员被曝请病假2年没上班，工资照领，却在外开店。此事引发热议，网友纷纷指其“吃空饷”。
					<img src="https://p3.pstatp.com/list/321f0003df32cda22182" alt="" />
					<img src="https://p3.pstatp.com/list/321f0003de2ad61b24ee" alt="" />
					<img src="https://p3.pstatp.com/list/321f0003de31482330f7" alt="" /></div>
				<div className="keywords">
					<span>周本顺</span>
					<span>刘铁男</span>
					<span>王保安</span>
					<span>刘德成</span>
					<span>吃空饷</span>
				</div>
			</div>
			// <Comment  ></Comment>
		</div>

		)
	}
}