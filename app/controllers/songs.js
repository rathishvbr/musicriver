import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    addSong() {
      this.set('addSong', {});
      this.set('songAddModal', true);
    },
  }
});
