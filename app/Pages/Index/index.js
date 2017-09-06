/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import { Tabs, WhiteSpace , Icon } from 'antd-mobile';
const TabPane = Tabs.TabPane;

import Header from '../../Components/Header/header'
import List from '../../Components/List/list.js'


require('./index.less')
export default class Home extends Component {
	render() {
		return (
			<section>
				<Header from="Home">
					<div className="home-header-bar">
						<i  className="fl homeEmail">
							<Icon type={require('../../assets/svg/email.svg')}  color="#fff" />
						</i>
			            <span className="logo">
			                今日头条
			            </span>
			            <Link to="/search" className="search fr">
			               <Icon type="search" size="sm"  color="#fff"   className="homeSearch"/>
			            </Link>
		            </div>
				</Header>
				<div style={{marginTop:'88px'}}>
					<Tabs
			          defaultActiveKey="1"
			          tabPosition="top" 
			          textColor="#505050"
			          activeTextColor="#f85959"
			          className="top_menu_list" 
			         
			        >
			        <TabPane tab="推荐" key="1">
			         	<List count={20} type="__all__" />
			        </TabPane>
			        <TabPane tab="热点" key="2">
			        	<List count={20} type="news_hot" />
			        </TabPane>
			          <TabPane tab="社会" key="3">
			          	<List count={20} type="news_society" />
			          </TabPane>
			          <TabPane tab="军事" key="4">
			          	<List count={20} type="news_military" />
			          </TabPane>
			          <TabPane tab="国际" key="5">
			          	<List count={20} type="news_world" />
			          </TabPane>
			        </Tabs>
		        </div>
			</section>
		)
	}
}