import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import C from 'musicriver/utils/constants';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  song: alias('model'),
  songToDelete: null,

  externalUrl: computed('song.slink', function() {
    return (C.REGEX.URI).test(this.get('song.slink')) ? this.get('song.slink') : C.EXTERNALURL.SPOTIFY;
  }),

  actions: {

    deleteSong(song) {
      this.set('showDeleteSpinner', true);
      return song.destroyRecord().then(() => {
        this.set('showDeleteSpinner', false);
        this.set("songToDelete", null);
      });
    },

    setSongRating(params) {
      let { item: song, rating } = params;
      if (song.get('rating') === rating) {
        rating = null;
      }
      song.set('rating', rating);
     return song.save();
   },

    editSong(song) {
      this.set('updateSong', song);
      this.set('editSong', true);
    }

  }
});
