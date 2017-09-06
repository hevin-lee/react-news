import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import MediaQuery from 'react-responsive';
import App from './containers/App';

import './assets/css/reset.css'

export default class Roots extends Component {
	render() {
		return (
			<div>
				{/* pc */}
		        <MediaQuery query='(min-device-width: 1124px)' >
			        pc
		        </MediaQuery>
				{/* 移动端 */}
		        <MediaQuery query='(max-device-width: 1124px)' >
			        {routes}
		        </MediaQuery>
		    </div>    
		)
	}
}
ReactDOM.render(<Roots/>,document.getElementById('app'));