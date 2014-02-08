// Server side route for inbound email

Router.map(function () {

	this.route('home', {
    path: '/' // match the root path
  });

  this.route('inbound', {
  	path: '/inbound',
    where: 'server',
    action: function() {
	    post = this.request.body;
	    console.log(post);
			color = post.subject;
		  Colors.update({pos: 1},{ $set: { "name": color } } );
		  return [200, "Success"]
    }
  });
}); 