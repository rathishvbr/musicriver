export default function() {
  this.timing = 400;

  this.get('/songs');
  this.post('/songs');
  this.put('/songs/:id');
  this.patch('/songs/:id');
  this.delete('/songs/:id');
}
