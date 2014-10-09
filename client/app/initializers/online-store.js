import DS from 'ember-data';
import config from '../config/environment';

var CustomOnlineSerializer = DS.ActiveModelSerializer.extend();
var CustomOnlineAdapter = DS.ActiveModelAdapter.extend({
  serializer: CustomOnlineSerializer.create(),
  namespace: 'api/v1', // your server namespace
  host: config.hostUrl
});

var OnlineStore = DS.Store.extend({
  adapterFor: function(type) {
    return this.container.lookup('adapter:_custom_store');
  },

  serializerFor: function(type) {
    return this.container.lookup('serializer:_custom_store');
  }
});

export var initialize = function(container, application) {
  CustomOnlineSerializer.reopen({ container: container });

  container.register('store:online', OnlineStore);
  container.register('adapter:_custom_store', CustomOnlineAdapter);
  container.register('serializer:_custom_store', CustomOnlineSerializer);

  application.inject('route',      'onlineStore', 'store:online');
  application.inject('controller', 'onlineStore', 'store:online');
};

export default {
  name: 'onlineStore',

  initialize: initialize
};
