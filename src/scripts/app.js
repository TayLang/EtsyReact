import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeview.js'
import DetailView from './views/detailview.js'
import {MultiCollection} from './models/listModels.js'
import {SingleCollection} from './models/listModels.js/'
//url: 'https://openapi.etsy.com/v2/listings/active.js',
//'api_key': 'ryiipkgu60qm2e2793lny6yz',

const app = function() {
  var EtsyRouter = Backbone.Router.extend({
  	routes: {
  		"home" : "handleHome",
  		"detailView/:id" : "handleDetail",
  		"*default" : "defaultToHome"
  	},
  	handleHome : function() {
  		var itemsList = new MultiCollection()
		var promise = itemsList.fetch({
			dataType : 'jsonp',
			data : {
				includes : 'MainImage',
				'api_key' : 'ryiipkgu60qm2e2793lny6yz'
			}
		})

		promise.then(function() {
			ReactDOM.render(<HomeView collection={itemsList} />, document.querySelector('.container'))
	  	})
  	},
  	handleDetail : function(id) {
  		var singleItem = new SingleCollection()
  		singleItem.url += id + '.js'
  		var promise = singleItem.fetch({
  			dataType : 'jsonp',
			data : {
				includes : 'MainImage',
				'api_key' : 'ryiipkgu60qm2e2793lny6yz'
			}
  		})
  		promise.then(function() {
  			ReactDOM.render(<DetailView model={singleItem} />, document.querySelector('.container'))
  		})
  	},
  	defaultToHome : function () {
  		location.hash = 'home'
  	}

  })
  new EtsyRouter ()
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..