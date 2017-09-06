/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
 import { BrowserRouter as Router,Route, IndexRoute, Redirect  } from 'react-router-dom'
import Detail from 'Pages/Detail/detail';

 
require('./list.less')

export default class List extends Component {
	 
	render(){
		return(
			<ul  className="newsContent" >
	            <Link to={`/detail/1`}   className="newsDetaile" >
	                <p className="title">中国外交部公布印军入侵铁证 最后给印指了条出路</p>
	                <div>
	                    <img  src="https://p3.pstatp.com/list/31de000022113f3a4121" />
	                    <div className="bottomInfo">
	                        <span className="avIcon" >广告</span>
	                        <span className="writer">中国网络文学大会</span> &nbsp;&nbsp;
	                        <span className="comment_count">评论&nbsp;1000</span>
	                        <span className="datetime" title="2017-08-02 16:58">27分钟前</span>
	                    </div>
	                </div>
	            </Link>
        	</ul>
		)
	}
}