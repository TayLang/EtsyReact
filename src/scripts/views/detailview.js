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
				<p>{this.props.model.get("title")}</p>
				<img src={this.props.model.get('MainImage').url_170x135} />
				<a href="#home">Go Back</a>
				<p>{this.props.model.get("description")}</p>
			</div>
		)
	}
})

 // var Body = React.createClass({

 // 	render : function() {

 // 	}
 // })

export default DetailView