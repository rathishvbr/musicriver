import DS from 'ember-data';
import config from 'musicriver/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,
});
