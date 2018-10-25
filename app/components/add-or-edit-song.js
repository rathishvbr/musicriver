import { alias } from '@ember/object/computed';
import BaseCoverter from 'musicriver/mixins/base-converter';
import Component from '@ember/component';
import C from 'musicriver/utils/constants';
import { computed, observer } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';


export default Component.extend(BaseCoverter, {
  tagName: '',
  disabled: true,
  newSong: null,
  song: alias('item'),
  store: service(),

  genreOptions: computed('genreOptions', function() {
    return C.GENRES;
  }),

  disableBtn: observer( 'song.artistname', 'song.albumname','song.genres', 'song.year','song.slink','song.albumcover', function() {
    this.set('disabled', isEmpty(this.get('song.artistname')) || isEmpty(this.get('song.albumname')) || isEmpty(this.get('song.genres')) || isEmpty(this.get('song.year')) || isEmpty(this.get('song.slink')) || isEmpty(this.get('song.albumcover')));
  }),

  actions: {

    createSong() {
      var self = this;
      self.set('songAddModal', false);
      let song = this.get('store').createRecord('song', this.get('song'));
      return song.save().then(function() {
        self.set('song', {});
      });
    },

    didSelectImg(files) {
     this.getBase64(files[0]).then((image) => {
       this.set('song.albumcover', image);
      });
    },

    updateSong() {
      this.set('editSong', false);
      this.get('song').save().then(() => {
        this.set('song', null);
      });
    }
  }
});
