/* globals Firebase */
import DS from 'ember-data';

var CustomOnlineSerializer = DS.FirebaseSerializer.extend();
var CustomOnlineAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://qbe.firebaseio.com/quiz')
});

// var CustomOnlineSerializer = DS.RESTSerializer.extend();
// var CustomOnlineAdapter = DS.RESTAdapter.extend({
//   namespace: 'api/v1'
// });

var OnlineStore = DS.Store.extend({
  adapterFor: function() {
    return this.container.lookup('adapter:_custom_store');
  },

  serializerFor: function() {
    return this.container.lookup('serializer:_custom_store');
  }
});

export default {
  name: 'onlineStore',

  initialize: function(container, application) {
    CustomOnlineSerializer.reopen({ container: container });

    container.register('store:online', OnlineStore);
    container.register('adapter:_custom_store', CustomOnlineAdapter);
    container.register('serializer:_custom_store', CustomOnlineSerializer);

    application.inject('route',      'onlineStore', 'store:online');
    application.inject('controller', 'onlineStore', 'store:online');
  }
};