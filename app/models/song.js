import DS from 'ember-data';

export default DS.Model.extend({
  artistname: DS.attr('string'),
  albumname: DS.attr('string'),
  genres: DS.attr(),
  albumcover: DS.attr('string', { defaultValue: "/images/default.jpg" }),
  year: DS.attr('string'),
  slink: DS.attr('string', { defaultValue: 'https://www.spotify.com'}),
  rating: DS.attr('number', { defaultValue: 1 }),
  songs: DS.hasMany('song')
});
