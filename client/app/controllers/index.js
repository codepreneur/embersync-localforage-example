import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		save: function () {
     	var user = this.emberSync.createRecord('user', { name: this.get('name') });
      user.emberSync.save();
      console.log(this.get('name'));
      console.log(user);
    } 
  }
});
