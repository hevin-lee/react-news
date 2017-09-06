/*
 * @Author: Hevin
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 * @Last Modified time: 2017-07-20 15:51:09
 */

import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import  { TabBar, Icon } from 'antd-mobile';
import Home from '../../Pages/Index/index';
 
require('./tabMenuBar.less')

export default class TabMenuBar extends Component {
	constructor(props){
		 super(props);
	    this.state = {
	      selectedTab: 'tab1',
	      hidden: false,
	    };
	}
	renderContent(pageText) { 
		if(this.state.selectedTab == 'tab1'){
			return (
				<div>
					<Home />
				</div>
			)
		} 
	}
	render(){
		return(
			<TabBar
	        unselectedTintColor="#999"
	        tintColor="#f85959"
	        barTintColor="#fff"
	        hidden={this.state.hidden}
	      >
	        <TabBar.Item
	          title="首页"
	          key="首页"
	          icon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selectedIcon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selected={this.state.selectedTab === 'tab1'}
	          onPress={() => {
	            this.setState({
	              selectedTab: 'tab1',
	            });
	          }}
	          data-seed="logId"
	        >
	          {this.renderContent('首页')}
	        </TabBar.Item>
	        
	        <TabBar.Item
	          title="口碑"
	          key="口碑"
	          icon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selectedIcon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selected={this.state.selectedTab === 'tab3'}
	          badge={1}
	          onPress={() => {
	            this.setState({
	              selectedTab: 'tab3',
	            });
	          }}
	          data-seed="logId"
	        >
	          {this.renderContent('口碑')}
	        </TabBar.Item>
	        <TabBar.Item
	          title="发现"
	          key="发现"
	          icon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selectedIcon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selected={this.state.selectedTab === 'tab2'}
	          onPress={() => {
	            this.setState({
	              selectedTab: 'tab2',
	            });
	          }}
	          data-seed="logId"
	        >
	          {this.renderContent('发现')}
	        </TabBar.Item>
	        <TabBar.Item
	          title="我的"
	          key="我的"
	          icon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selectedIcon={<div style={{
	            width: '0.44rem',
	            height: '0.44rem',
	            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
	          />
	          }
	          selected={this.state.selectedTab === 'tab4'}
	          onPress={() => {
	            this.setState({
	              selectedTab: 'tab4',
	            });
	          }}
	          data-seed="logId"
	        >
	          {this.renderContent('我的')}
	        </TabBar.Item>
	      </TabBar>
		)
	}
}