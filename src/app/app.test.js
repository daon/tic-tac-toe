import test from 'tape';

test('Tape should work', (assert) => {
    const actual = true;
    const expected = true;

    assert.equal(actual, expected, 'true should be true');

    assert.end();
});