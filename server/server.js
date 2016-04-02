var apiCall = function(apiUrl, callback) {
	try {
		var response = HTTP.get(apiUrl).data;
		callback(null, response);
	} catch( error ) {
		if( error.response ) {
			var errorCode = error.response.data.code;
			var errorMessage = error.response.data.message;
		} else {
			var errorCode = 500;
			var errorMessage = 'Cannot access the API';
		}
		var myError = new Meteor.Error(errorCode, errorMessage);
		callback(myError, null);
	}
};

Meteor.methods({
	updatePosts: function(comix) {
		_.each(comix, function(comic) {
			console.log("Found comic " + comic.ID + ", " + comic.alias);
			Posts.upsert({ID: comic.ID}, {
				$set: {
					ID     : comic.ID,
					alias  : comic.alias,
					content: comic.description,
					thumb  : comic.thumb
				}
			});
		});
		return true;
	},
	getPosts   : function() {
		console.log('getPosts called');
		this.unblock();
		var apiUrl = "http://www.chestercomix.com/app/api/comix/";
		var response = Meteor.wrapAsync(apiCall)(apiUrl);
		return response;
	}

});

Meteor.publish('posts', function() {
	return Posts.find({});
});

Meteor.publish('post', function(postId) {
	return Posts.find({ID: postId});
});