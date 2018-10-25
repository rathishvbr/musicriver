import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['song-rating'],

  maxStars:  alias('maxRating'),
  fullStars: alias('rating'),

  stars: computed('fullStars', 'maxStars', function() {
    let fullStars = this.starRange(1, this.get('fullStars'), 'full');
    let emptyStars = this.starRange(this.get('fullStars') + 1, this.get('maxStars'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange(start, end, type) {
    let starsData = [];
    for (let i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },

  actions: {
    setRating(newRating) {
      this.setRatingAction({
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});
