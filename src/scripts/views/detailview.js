import React from 'react'
import Backbone from 'backbone'
import {SingleCollection} from '../models/listModels.js'

var DetailView = React.createClass({
	
	getInitialState : function() {
		return {
			itemColl : []
		}
	},

	render : function() {
		console.log(this.props.model)
		return (
			<div className="detailView">
				<Body
					data = {this.props.model} />
			</div>
		)
	}
})

// var Body = React.createClass({

// 	render : function
// })

export default DetailView