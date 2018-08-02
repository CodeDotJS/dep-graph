import test from 'ava';
import m from '.';

test('user', async t => {
	const num = await m('CodeDotJS', 'youtube-playlist');

	t.is(num.repositories, '7');
	t.is(num.packages, '2');
});
