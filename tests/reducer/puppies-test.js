import puppies from '../../app/reducer/puppies';

module('reducerpuppies', () => {
  test('it exists', (assert) => {
    assert.ok(puppies, 'puppies exists');
  });
});
