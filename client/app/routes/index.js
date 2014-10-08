import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.emberSync.find('user', '2oj9m');
	},
	actions: {
		save: function () {
			this.modelFor('index').save();
		}
	}
});