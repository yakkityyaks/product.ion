//one test each using mocha.js
var axios = require('axios');
var expect = require('expect');

describe('Server', function() {
	describe('#registerUser', function() {
		it('should throw an error when creating a user with an already used username', function(done) {
			axios.post('/api/register/user', {
				data: {
					username: "timtim",
					password: "timtim",
					perm: 0,
					orgs_id: 1
				}}).then(function(res) {
					console.log(res);
					done();
				});
		})
	})
})