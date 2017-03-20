import React from 'react'
import Backbone from 'backbone'
import {MultiCollection} from '../models/listModels.js'

var HomeView = React.createClass({

	getInitialState : function() {
		return {
			itemsColl : []
		}
		
	},

	render : function() {
		//console.log('here is the initial state', this.props)
		return (
			<div className = 'content'>

				<h1>Etsy React Clone</h1>
				
				<Body 
					data = {this.props.collection}
				/>

			</div>
			)
	}
})

var Body = React.createClass({
	_makeItems : function() {
		//console.log(this.props.data.models)
		var newArray = []
		for (var i=0; i<this.props.data.models.length; i++) {
			newArray.push(<ShowItems 
							key={this.props.data.models[i].cid}
							singleItem={this.props.data.models[i]}
							/>)
		}
		//console.log(newArray)
		return newArray
	},

	render : function() {
		
		return (
			<div className='item-box'>
				{this._makeItems()}
			</div>
		)
	}
})	

var ShowItems = React.createClass({
	render: function() {
		//console.log(this.props)
		return (
			<div className='item'>
				<a href={`#detailView/${this.props.singleItem.get("listing_id")}`}>
					<img src={this.props.singleItem.get('MainImage').url_170x135} />
					<p>{this.props.singleItem.get('title')}</p>
				</a>
			</div>
		)
	}
})
export default HomeView