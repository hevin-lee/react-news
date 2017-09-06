import React, {Component, PropTypes} from 'react'
import { BrowserRouter as Router,Route, IndexRoute, Redirect ,browserHistory , Switch  } from 'react-router-dom'
import App from './Components/App';
import TabMenuBar from 'Components/TabMenuBar/tabMenuBar';
import Detail from 'Pages/Detail/detail';
import List from 'Components/List/list';

 
 
const routes = (
	<Router history={browserHistory}> 
		<div>
			<Switch>
				<Route exact   path="/" 　component={TabMenuBar}  />
				<Route  path="/detail/:id" component={Detail} />
			</Switch>
		</div>
	</Router>
);

export default routes