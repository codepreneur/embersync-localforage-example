import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.emberSync.find('user', 27);
	},
	actions: {
		save: function () {
      console.log('bluuu');
      console.log(this.controllerFor("index").get('name'));
      var user = this.emberSync.createRecord('user', { name: this.controllerFor("index").get('name') });
      user.emberSync.save().then(function(user) {
        console.log('All saved');
        console.log(user);
      });
    }
  }
});