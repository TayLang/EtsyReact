import Backbone from 'backbone'

export var MultiCollection = Backbone.Collection.extend({
    url: 'https://openapi.etsy.com/v2/listings/active.js',
    parse: function(apiResponse) { 
        return apiResponse.results
    }
})

export var SingleCollection = Backbone.Model.extend({
	url: 'https://openapi.etsy.com/v2/listings/',
	parse: function(apiResponse) {
		return apiResponse.results[0]
}
})