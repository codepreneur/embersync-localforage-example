import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
    return this.emberSync.find('user', '2oj9m');
    // return this.emberSync.createRecord('user', {name: 'Robinson'});
    console.log(this.emberSync.find('user', '5keks'));
  }
});